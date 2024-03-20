import './Catalog.scss'
import {CatalogItem} from "../../components/formComponents/CatalogItem";
import {faCaretDown, faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useRef, useState} from "react";
import {FilterComponent} from "../../components/formComponents/FilterComponent";

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
    'wegw gweg ew',
    'gewgew 32t 343y',
    'hw hvd sewhw',
    'weg whre efewg ew',
    'gew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y ew3 2be t3w g43y',
    'hw ewrere h2 ew35',
    'we gwhre efe ewgew'
]


const Catalog = () => {

    const dropDownRef: any = useRef()

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

    return (
        <div className='catalogMainContainer'>
            <div>
                <span>Cases for phones</span>
                <div className='catalogBodyContainer'>
                    <div className='filterContainer'>
                        <FilterComponent
                            arr={test4}
                            title={'Test4'}
                        />
                        <FilterComponent
                            arr={test2}
                            title={'Test2'}
                        />

                    </div>
                    <div className='itemsMainContainer'>
                        <div className='sortContainer'>
                            <div className='activeFilters'>

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
                                <div
                                    className='sortButtonDropMenu'
                                    style={sortButtonChecker ? {display: 'flex'} : {display: 'none'}}
                                >
                                    {test2.map((sort) => (
                                        <div
                                            key={`sort_${sort}`}
                                            onClick={sortChange(sort)}
                                        >
                                            {sort}
                                        </div>
                                    ))}
                                </div>
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