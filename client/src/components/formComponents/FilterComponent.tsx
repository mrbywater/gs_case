import './FilterComponent.scss'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import SlideDown from "react-slidedown/lib/slidedown";
import 'react-slidedown/lib/slidedown.css'

const FilterComponent = (props : any) => {

    const {
        arr,
        title
    } = props

    const [showAll, setShowAll] = useState(false)
    const [showCategory, setShowCategory] = useState(true)
    const showAllHandler = () => setShowAll(!showAll)
    const showCategoryHandler = () => setShowCategory(!showCategory)

    return arr && (
        <div className='filterItemContainer'>
            <div
                className='filterTitle'
                onClick={showCategoryHandler}
            >
                <span>{title}</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    style={showCategory ? {transform: 'rotate(180deg)'} : {}}
                />
            </div>
            <SlideDown
                className={'my-dropdown-slidedown'}
                closed={!showCategory}
            >
                {arr.slice(showAll ? 0 : 0,showAll ? arr.length : 5).map((category : string) => (
                    <div
                        className="checkbox-wrapper-46"
                        key={category}
                    >
                        <input
                            type="checkbox"
                            id={"cbx-46" + category}
                            className="inp-cbx"
                        />
                        <label
                            htmlFor={"cbx-46" + category}
                            className="cbx"
                        >
                    <span>
                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
                            <span>{category}</span>
                        </label>
                    </div>
                ))}
                <div
                    className={arr.length > 5 ? 'showMore' : 'disable'}
                    onClick={showAllHandler}
                >
                    <span>{showAll ? 'Hide' : 'Show more'}</span>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        style={showAll ? {transform: 'rotate(180deg)'} : {}}
                    />
                </div>
            </SlideDown>
        </div>
    )
}
export { FilterComponent }