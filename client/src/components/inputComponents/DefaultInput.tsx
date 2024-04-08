import './DefaultInput.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DefaultInput = (props : any) => {

    const {
        placeholder,
        inputStyle,
        inputType,
        setValue,
        value,
        icon
    } = props

    const valueHandler = () => (event : any) : void => {
        setValue(event.target.value)
    }

    return (
        <div
            className='inputMainContainer'
            style={inputStyle}
        >
            <FontAwesomeIcon icon={icon}/>
            <input
                placeholder={placeholder}
                type={inputType}
                value={value}
                onChange={valueHandler()}
            />
        </div>
    )
}
export { DefaultInput }