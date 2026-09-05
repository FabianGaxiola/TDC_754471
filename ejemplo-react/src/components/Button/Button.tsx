import type { ButtonProps } from "./Button.props"

function Button(props: ButtonProps ) {

    const variant = props.variant ?? 'default'

    return (
        <button onClick={ props.clickHandler }>{ props.texto } [{ variant }]</button>
    )
}

export default Button;