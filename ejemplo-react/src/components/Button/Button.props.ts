type ButtonVariant = 'success' | 'default' | 'disabled' | 'error'

export interface ButtonProps {
    texto: string;
    clickHandler: () => void;
    variant?: ButtonVariant
}
