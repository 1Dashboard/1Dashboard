import { Page } from "@/interfaces/core/Config";

const page: Page = {
    url: "/form",
    name: "Forms",
    title: "Form inputs",
    layout: ({ route }) => ({
        type: "Grid",
        props: {
            components: [
                {
                    type: "Grid",
                    props: {
                        components: [
                            {
                                type: "Form",
                                props: {
                                    components: [
                                        {
                                            type: "TextInput",
                                            props: {
                                                id: "name",
                                                name: "Text",
                                                placeholder: "Input placeholder",
                                            }
                                        },
                                        {
                                            type: "NumberInput",
                                            props: {
                                                id: "transferAmount",
                                                name: "Number",
                                                placeholder: "Input placeholder",
                                            }
                                        },
                                        {
                                            type: "SelectInput",
                                            props: {
                                                id: "currencySelect",
                                                name: "Select",
                                                placeholder: "Select a currency",
                                                options: [
                                                    {
                                                        value: "eur",
                                                        label: "Euro",
                                                    },
                                                    {
                                                        value: "usd",
                                                        label: "US Dollar",
                                                    },
                                                    {
                                                        value: "pln",
                                                        label: "Polish zloty",
                                                    }
                                                ],
                                            }
                                        },
                                        {
                                            type: "MultiSelectInput",
                                            props: {
                                                id: "currencyMultiSelect",
                                                name: "Select",
                                                options: [
                                                    {
                                                        value: "eur",
                                                        label: "Euro",
                                                    },
                                                    {
                                                        value: "usd",
                                                        label: "US Dollar",
                                                    },
                                                    {
                                                        value: "pln",
                                                        label: "Polish zloty",
                                                    }
                                                ],
                                            }
                                        },
                                        {
                                            type: "RadioInput",
                                            props: {
                                                id: "currencyRadio",
                                                name: "Radio",
                                                options: [
                                                    {
                                                        value: "eur",
                                                        label: "Euro",
                                                    },
                                                    {
                                                        value: "usd",
                                                        label: "US Dollar",
                                                    },
                                                    {
                                                        value: "pln",
                                                        label: "Polish zloty",
                                                    }
                                                ],
                                            }
                                        },
                                        {
                                            type: "CheckboxInput",
                                            props: {
                                                id: "currencyCheckbox",
                                                name: "Checkbox",
                                                options: [
                                                    {
                                                        value: "eur",
                                                        label: "Euro",
                                                    },
                                                    {
                                                        value: "usd",
                                                        label: "US Dollar",
                                                    },
                                                    {
                                                        value: "pln",
                                                        label: "Polish zloty",
                                                    }
                                                ],
                                            }
                                        },
                                        {
                                            type: "ToggleInput",
                                            props: {
                                                id: "terms",
                                                name: "Toggle",
                                                label: "I agree to the Terms of Service"
                                            }
                                        },
                                        {
                                            type: "TextareaInput",
                                            props: {
                                                id: "bio",
                                                name: "Textarea",
                                                placeholder: "Input placeholder",
                                            }
                                        },
                                        {
                                            type: "FileInput",
                                            props: {
                                                id: "profileImage",
                                                name: "File",
                                                placeholder: "Click to browse or drag a file"
                                            }
                                        },
                                    ]
                                },
                                events: [
                                    {
                                        on: "submit",
                                        callback: () => console.log(route),
                                    }
                                ]
                            }
                        ]
                    },
                    tile: {
                        style: "grid",
                        title: "Basic input types",
                        description: "These are simple inputs with minimal configuration.",
                    }
                },
                {
                    type: "Grid",
                    props: {
                        components: [
                            {
                                type: "Form",
                                props: {
                                    components: [
                                        {
                                            type: "TextInput",
                                            props: {
                                                id: "url",
                                                name: "Website address",
                                                placeholder: "Enter your website address",
                                                prependText: "https://",
                                            }
                                        },
                                        {
                                            type: "PasswordInput",
                                            props: {
                                                id: "password",
                                                name: "Password",
                                                placeholder: "Enter your password",
                                                prependIcon: "lock",
                                                displayRevealButton: true,
                                            }
                                        },
                                        {
                                            type: "TextInput",
                                            props: {
                                                id: "ghProfile",
                                                name: "GitHub Profile",
                                                placeholder: "Enter your GitHub profie name",
                                                prependText: "https://github.com/",
                                                prependIcon: "github",
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    tile: {
                        style: "grid",
                        title: "Inputs with text and icon label",
                        description: "Inputs can have labels on both sides to hint what user is expected to enter. It's possible to combine text and icon labels."
                    }
                },
            ]
        }
    })
};

export default page;