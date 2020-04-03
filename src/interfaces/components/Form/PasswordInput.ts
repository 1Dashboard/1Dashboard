import { InputProps } from "@/interfaces/components/Form/Input";

export interface PasswordInput {
    type: "PasswordInput";
    props: PasswordInputProps;
}

export interface PasswordInputProps extends InputProps {
    value?: string;
    displayRevealButton?: boolean;
}
