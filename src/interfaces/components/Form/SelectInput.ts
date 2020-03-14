import { InputProps } from "@/interfaces/components/Form/Input";

export interface SelectInput {
    type: "selectInput";
    props: SelectInputProps;
}

export interface SelectInputProps extends InputProps {
    options: Array<SelectOption>;
    value?: string;
}

interface SelectOption {
    value: string;
    label?: string;
}
