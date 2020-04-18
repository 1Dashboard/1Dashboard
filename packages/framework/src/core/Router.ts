import Vue from "vue";
import Router from "vue-router";
import { Route } from "vue-router/types/router";
import PageComponent from "@framework/core/components/Page.vue";
import { Context, Page, PageUrl } from "@framework/interfaces/core/Config";

Vue.use(Router);

/**
 * Registers all routes defined in the template and redirect for "/" if it's not already defined.
 */
export function setupRouter(context: Context): Router {
    // Get all route configuration files
    const files = require.context("@framework/../config/routes", true, /\.ts$/);
    context.configuration.pages = files.keys().map(key => files(key).default);

    // Group all content routes
    const routes = context.configuration.pages.map((page: Page) => ({
        path: page.url as string,
        component: PageComponent,
    }));

    // Register catch-all route
    routes.push({
        path: "*",
        component: PageComponent,
    });

    // Register Vue Router
    const router = new Router({
        mode: context.configuration.routing.mode,
        routes,
    });

    router.onReady(async () => await onReady(context));
    router.beforeEach(async (...params) => await beforeEach(context, ...params));
    router.afterEach(async (...params) => await afterEach(context, ...params));

    context.router = router;

    return router;
}

/**
 * Called when router completes the initial navigation.
 */
async function onReady(context: Context): Promise<void> {
    await Promise.all(context.configuration.routing.onReady.map((callback: Function) => callback()));
}

/**
 * Called before every navigation.
 */
async function beforeEach(context: Context, to: Route, from: Route, next: () => void): Promise<void> {
    await context.currentPage?.beforeLeave?.(context);
    const callbacks = await Promise.all(context.configuration.routing.beforeEach.map((callback: Function) => callback(to, from, next)));

    if (callbacks.every((result) => result)) {
        next();
    }
}

/**
 * Called after every navigation.
 */
async function afterEach(context: Context, to: Route, from: Route): Promise<void> {
    context.route = to;
    await loadCurrentPage(context, to.path);
    await Promise.all(context.configuration.routing.afterEach.map((callback: Function) => callback(to, from)));
}

/**
 * Checks if given page is a status page (404, 500 etc.)
 */
function isStatusPage({ url }: Page): boolean {
    return Object.values(PageUrl).includes(url as any);
}

/**
 * Returns configuration of a page with matching URL.
 */
function findPageByUrl(context: Context, url: string): Page | undefined {
    return context.configuration.pages.find((page: Page) => page.url === url);
}

/**
 * Loads current page and resolves layout data.
 */
async function loadCurrentPage(context: Context, url: string): Promise<void> {
    try {
        const page = findPageByUrl(context, url);

        if (!page) {
            return loadCurrentPage(context, PageUrl.NotFound);
        }

        // This is required to remove reactivity
        context.currentPage = { ...page };

        if (typeof context.currentPage.layout === "function") {
            context.currentPage.layout = await context.currentPage.layout(context);
        }

        await context.currentPage.beforeEnter?.(context);
    } catch (error) {
        return loadCurrentPage(context, PageUrl.InternalError);
    }
}

