export interface RadioInput {
    type: "radioInput";
    props: RadioInputProps;
}

export interface RadioInputProps {
    id: string;
    name: string;
    options: Array<SelectOption>;
    value?: string;
    required?: boolean;
    readonly?: boolean;
}

export interface SelectOption {
    value: string;
    label?: string;
}
