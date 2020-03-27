export interface MultiSelectInput  {
    type: "MultiSelectInput";
    props: MultiSelectInputProps;
}

export interface MultiSelectInputProps {
    id: string;
    name: string;
    required?: boolean;
    readonly?: boolean;
    options: Array<MultiSelectOption>;
    value?: Array<string>;
}

export interface MultiSelectOption {
    value: string;
    label?: string;
}