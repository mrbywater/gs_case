import './DefaultButton.scss'

const DefaultButton = (props : any) => {

    const {
        buttonWidth,
        buttonHeight,
        text,
        onClickFunc
    } = props

    const defaultButton = {
        width: `${buttonWidth}px`,
        height: `${buttonHeight}px`
    }

    return (
        <button style={defaultButton} onClick={onClickFunc}>
            {text}
        </button>
    )
}
export { DefaultButton }