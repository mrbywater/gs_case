import './ActiveFilter.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const ActiveFilter = (props : any) => {

    const {
        buttonHandler,
        title
    } = props

    return (
        <div
            className='activeFilterBlock'
            onClick={buttonHandler}
        >
            <span>{title}</span>
            <FontAwesomeIcon icon={faXmark}/>
        </div>
    )
}
export { ActiveFilter }