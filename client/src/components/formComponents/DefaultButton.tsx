import './DefaultButton.scss'

const DefaultButton = (props : any) => {

    const {
        buttonStyle,
        text,
        onClickFunc
    } = props

    return (
        <button style={buttonStyle} onClick={onClickFunc}>
            {text}
        </button>
    )
}
export { DefaultButton }