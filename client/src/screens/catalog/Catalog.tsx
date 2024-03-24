import './Catalog.scss'
import {CatalogItem} from "../../components/formComponents/CatalogItem";
import {faCaretDown, faRightLeft, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useRef, useState} from "react";
import {FilterComponent} from "../../components/formComponents/FilterComponent";
import SlideDown from "react-slidedown/lib/slidedown";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {cleanFilter, removeFilter} from "../../redux/filters";

const test = [
    {
        price: '32532',
        title: 'fewgwtewggwe'
    },
    {
        price: '32532',
        title: 'fewtwgwgwe'
    },
    {
        price: '32532',
        title: 'fewgwrhegwe'
    },
    {
        price: '32532',
        title: 'fewgbwgwe'
    },
    {
        price: '32532',
        title: 'fewgvswgwe'
    },
    {
        price: '32532',
        title: 'fewgewwgwe'
    },
    {
        price: '32532',
        title: 'fewgwrgwe'
    },
]

const test2 = [
    'weg we gew',
    'gew32t343y',
    'hwhe whw',
    'wegw efew gew',
    'ge w32t 3wg43y',
    'hw ew h2 ew35'
]

const test4 = [
    {
        title: '1',
        data: [
            'wegw gweg ew',
            'gewgew 32t 343y',
            'hw hvd sewhw',
            'weg whre efewg ew',
            'gew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y',
            'hw ewrere h2 ew35',
            'we gwhre efe ewgew'
        ]
    },
    {
        title: '2',
        data: [
            'weg we gew',
            'gew32t343y',
            'hwhe whw',
            'wegw efew gew',
            'ge w32t 3wg43y',
            'hw ew h2 ew35'
        ]
    },
    {
        title: '3',
        data: [
            'rber',
            'hjybn,',
            'wee'
        ]
    },
    {
        title: '4',
        data: [
            'rbe4r',
            'hjy6bn,',
            'wee5t',
            'rbngner',
            'hrngfejybn,',
            'wtugee',
            'rrehber',
            'hjweybn,',
            'wedbe'
        ]
    }

]


const Catalog = () => {

    const dropDownRef: any = useRef()

    const dispatch = useAppDispatch()
    const filters = useAppSelector(state => state.filters.list);

    const [sortButtonValue, setSortButtonValue] = useState('By popularity')
    const [sortButtonChecker, setSortButtonChecker] = useState(false)

    const sortButtonHandler = () => setSortButtonChecker(!sortButtonChecker)

    const sortChange = (sort : string)  => () => {
        setSortButtonValue(sort)
        setSortButtonChecker(false)
    }

    useEffect(()=> {
        const handleClickOutside = (event : MouseEvent): void => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setSortButtonChecker(false)
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside)

    }, [])

    const deleteActiveFilter = (name : string) => () => dispatch(removeFilter(name))
    const deleteAllFilters = () => dispatch(cleanFilter())

    return (
        <div className='catalogMainContainer'>
            <div>
                <span>Cases for phones</span>
                <div className='catalogBodyContainer'>
                    <div className='filterContainer'>
                        {test4.map((filter)=> (
                            <div key={filter.title}>
                                <FilterComponent
                                    arr={filter.data}
                                    title={filter.title}
                                />
                            </div>
                        ))}
                    </div>
                    <div className='itemsMainContainer'>
                        <div className='sortContainer'>
                            <div className='activeFiltersContainer'>
                                {!!filters.length && (
                                    <div
                                        className='activeFilterBlock'
                                        onClick={deleteAllFilters}
                                    >
                                        <span>Clean filters</span>
                                        <FontAwesomeIcon icon={faXmark}/>
                                    </div>
                                )}
                                {filters?.map((filter) => (
                                    <div
                                        key={filter}
                                        className='activeFilterBlock'
                                        onClick={deleteActiveFilter(filter)}
                                    >
                                        <span>{filter}</span>
                                        <FontAwesomeIcon icon={faXmark}/>
                                    </div>
                                ))}
                            </div>
                            <div className='sortButtonContainer'>
                                <div
                                    className='sortButton'
                                    onClick={sortButtonHandler}
                                    ref={dropDownRef}
                                >
                                    <div>
                                        <FontAwesomeIcon icon={faRightLeft} />
                                        <span title={sortButtonValue}>{sortButtonValue}</span>
                                    </div>
                                    <FontAwesomeIcon
                                        icon={faCaretDown}
                                        style={sortButtonChecker ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0deg)'}}
                                    />
                                </div>
                                <SlideDown
                                    className='sortButtonDropMenu'
                                    closed={!sortButtonChecker}
                                >
                                    {test2.map((sort) => (
                                        <div
                                            key={`sort_${sort}`}
                                            onClick={sortChange(sort)}
                                        >
                                            {sort}
                                        </div>
                                    ))}
                                </SlideDown>
                            </div>
                        </div>
                        <div className='itemsContainer'>
                            {test.map((shopItem) => (
                                <div key={`shopItem_${shopItem.title}`}>
                                    <CatalogItem
                                        price={shopItem.price}
                                        title={shopItem.title}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Catalog }