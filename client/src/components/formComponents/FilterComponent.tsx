import './FilterComponent.scss'
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import SlideDown from "react-slidedown/lib/slidedown";
import 'react-slidedown/lib/slidedown.css'
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {addFilter, removeFilter} from "../../redux/filters";

type Filter = {
    name: string,
    check: boolean
}

const FilterComponent = (props : any) => {

    const {
        arr,
        title
    } = props

    const dispatch = useAppDispatch()
    const filters = useAppSelector(state => state.filters.list);

    const [arrCheck, setArrCheck] = useState(
        arr.map((filter: string) : Filter => {
        return {
            name: filter,
            check: false
        }
    }))
    const [showAll, setShowAll] = useState<boolean>(false)
    const [showCategory, setShowCategory] = useState<boolean>(true)
    const showAllHandler = () => setShowAll(!showAll)
    const showCategoryHandler = () => setShowCategory(!showCategory)

    const filterCheckHandler =  (filter : string, index: number) => ()=> {

        const newArrCheck : Filter[] = [...arrCheck];

        if (!filters.includes(filter)) {
            newArrCheck[index].check = !newArrCheck[index].check
            setArrCheck(newArrCheck)
            dispatch(addFilter(arrCheck[index].name))
        } else {
            newArrCheck[index].check = !newArrCheck[index].check
            setArrCheck(newArrCheck)
            dispatch(removeFilter(arrCheck[index].name))
        }
    }

    useEffect(() => {

        const newArrCheck : Filter[] = [...arrCheck];

        const deletedFilterIndex = arrCheck.findIndex((item : Filter) => {
             if (!filters.includes(item?.name) && item.check === true) {
                 return item
             }
        })

        if (deletedFilterIndex !== -1) {
            arrCheck[deletedFilterIndex].check = !arrCheck[deletedFilterIndex].check
            setArrCheck(newArrCheck)
        }

        if (!filters.length) {
            setArrCheck(
                arr.map((filter: string) : Filter => {
                    return {
                        name: filter,
                        check: false
                    }
            }))
        }

    }, [filters])

    return arrCheck && (
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
                {arrCheck.slice(showAll ? 0 : 0,showAll ? arr.length : 5).map((category: any, index: number) => (
                    <div
                        className="checkbox-wrapper-46"
                        key={category.name}
                        onClick={filterCheckHandler(category.name, index)}
                    >
                        <input
                            type="checkbox"
                            className="inp-cbx"
                            id={`checkbox${category.name}`}
                            checked={category.check}
                        />
                        <label
                            className="cbx"
                        >
                    <span>
                        <svg viewBox="0 0 12 10" height="10px" width="12px">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                    </span>
                            <span>{category.name}</span>
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