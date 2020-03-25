import { Radius, Shadow } from "@/interfaces/core/Styles";
import { Component } from "@/interfaces/core/Components";
import { Route } from "vue-router";

export interface App {
    debug: boolean;
    url: string;
    title: string;
    description: string;
    keywords: string;
    faviconUrl: string;
    faviconType: string;
    defaultPageUrl: string;
}

export interface Localization {
    timezone: string;
    locale: string;
    fallbackLocale: string;
    locales?: object;
}

export interface Page {
    url: string;
    name: string;
    title?: string;
    layout: Component | { (context: PageLayoutContext): Component };
    props?: {
        hideBreadcrumbs?: boolean;
    };
}

export interface PageLayoutContext {
    route: Route
}

export interface Styles {
    tile: {
        predefinedStyles: {
            [styleName: string]: GridTileStyle;
        };
    };
}

export interface GridTileStyle {
    background?: string;
    padding?: number;
    shadow?: Shadow;
    radius?: Radius;
}
