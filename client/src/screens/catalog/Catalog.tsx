import './Catalog.scss'
import {CatalogItem} from "../../components/formComponents/CatalogItem";
import {faCaretDown, faRightLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

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
    'wegwegew',
    'gew32t343y',
    'hwhewhw',
    'wegwefewgew',
    'gew32t3wg43y',
    'hw ew h2 ew35'
]

const Catalog = () => {

    const [sortButtonValue, setSortButtonValue] = useState('By popularity')
    const [sortButtonChecker, setSortButtonChecker] = useState(false)

    const sortButtonHandler = () => setSortButtonChecker(!sortButtonChecker)

    const sortChange = (sort : string)  => () => {
        setSortButtonValue(sort)
        setSortButtonChecker(false)
    }

    //dropDown Select!!!!

    return (
        <div className='catalogMainContainer'>
            <div>
                <span>Cases for phones</span>
                <div className='catalogBodyContainer'>
                    <div className='filterContainer'>

                    </div>
                    <div className='itemsMainContainer'>
                        <div className='sortContainer'>
                            <div className='activeFilters'>

                            </div>
                            <div className='sortButtonContainer'>
                                <div
                                    className='sortButton'
                                    onClick={sortButtonHandler}
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