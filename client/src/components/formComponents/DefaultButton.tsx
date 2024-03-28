import './DefaultButton.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DefaultButton = (props : any) => {

    const {
        buttonStyle,
        text,
        onClickFunc,
        icon
    } = props

    return (
        <button
            className='btn-hover'
            style={buttonStyle}
            onClick={onClickFunc}
        >
            {icon &&
                <FontAwesomeIcon
                    className='buttonIcon'
                    icon={icon}
                />
            }
            <span>{text}</span>
        </button>
    )
}
export { DefaultButton }