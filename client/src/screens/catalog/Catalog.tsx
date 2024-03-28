import './Catalog.scss'
import {CatalogItem} from "../../components/catalogComponents/CatalogItem";
import {faCaretDown, faRightLeft, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useRef, useState} from "react";
import {FilterComponent} from "../../components/catalogComponents/FilterComponent";
import SlideDown from "react-slidedown/lib/slidedown";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {cleanFilter, removeFilter} from "../../redux/filters";
import {ActiveFilter} from "../../components/catalogComponents/ActiveFilter";
import {PaginationCatalog} from "../../components/catalogComponents/Pagination";

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
        title: 'fewg1wrgwe'
    },
    {
        price: '32532',
        title: 'fewgbw2gwe'
    },
    {
        price: '32532',
        title: 'fewg3vswgwe'
    },
    {
        price: '32532',
        title: 'fewge4wwgwe'
    },
    {
        price: '32532',
        title: 'few5gwrgwe'
    },
    {
        price: '32532',
        title: 'fewgb6wgwe'
    },
    {
        price: '32532',
        title: 'fewg7vswgwe'
    },
    {
        price: '32532',
        title: 'fewge8wwgwe'
    },
    {
        price: '32532',
        title: 'fewg9wrgwe'
    },
    {
        price: '32532',
        title: 'fewg11bwgwe'
    },
    {
        price: '32532',
        title: 'fewgvs22wgwe'
    },
    {
        price: '32532',
        title: 'fewgew33wgwe'
    },
    {
        price: '32532',
        title: 'fewg44wrgwe'
    },
    {
        price: '32532',
        title: 'fewg55bwgwe'
    },
    {
        price: '32532',
        title: 'fewgv66wgwe'
    },
    {
        price: '32532',
        title: 'fewge77wwgwe'
    },
    {
        price: '32532',
        title: 'fewgw8  ef ef e fe fe fe e fe fe feww w few fwe  few few fwe few few few few f efw gew gew gweg 8rgwe'
    },
    {
        price: '32532',
        title: 'fewg1v66w1gwe'
    },
    {
        price: '32532',
        title: 'few2ge77ww2gwe'
    },
    {
        price: '32532',
        title: 'fe3wgv66w3gwe'
    },
    {
        price: '32532',
        title: 'few4ge77ww4gwe'
    },
    {
        price: '32532',
        title: 'fe5wgv66w5gwe'
    },
    {
        price: '32532',
        title: 'fe6wge77ww6gwe'
    },
    {
        price: '32532',
        title: 'fe7wgv66w7gwe'
    },
    {
        price: '32532',
        title: 'few8ge77ww8gwe'
    },
    {
        price: '32532',
        title: 'few2ge77ww9gwe'
    },
    {
        price: '32532',
        title: 'fe3wgv66wg0we'
    },
    {
        price: '32532',
        title: 'few4ge77wwg00we'
    },
    {
        price: '32532',
        title: 'fe5wgv66wg99we'
    },
    {
        price: '32532',
        title: 'fe6wge77wwg88we'
    },
    {
        price: '32532',
        title: 'fe7wgv66wg77we'
    },
    {
        price: '32532',
        title: 'few8ge77wwg66we'
    },
    {
        price: '32532',
        title: 'few2ge77wwg55we'
    },
    {
        price: '32532',
        title: 'fe3wgv66wg44we'
    },
    {
        price: '32532',
        title: 'few4ge77wwg33we'
    },
    {
        price: '32532',
        title: 'fe5wgv66wgw22e'
    },
    {
        price: '32532',
        title: 'fe6wge77wwg212we'
    },
    {
        price: '32532',
        title: 'fe7wgv66wg111we'
    },
    {
        price: '32532',
        title: 'few8ge77ww222gwe'
    },
    {
        price: '32532',
        title: 'few2ge77wwg333we'
    },
    {
        price: '32532',
        title: 'fe3wgv66wg444we'
    },
    {
        price: '32532',
        title: 'few4ge77wwg555we'
    },
    {
        price: '32532',
        title: 'fe5wgv66wg666we'
    },
    {
        price: '32532',
        title: 'fe6wge77ww777gwe'
    },
    {
        price: '32532',
        title: 'fe7wgv66wgw888e'
    },
    {
        price: '32532',
        title: 'few8ge77ww999gwe'
    },
    {
        price: '32532',
        title: 'few2ge77wwg000we'
    },
    {
        price: '32532',
        title: 'fe3wgv66wg9999we'
    },
    {
        price: '32532',
        title: 'few4ge77wwg8888we'
    },
    {
        price: '32532',
        title: 'fe5wgv66wg7777we'
    },
    {
        price: '32532',
        title: 'fe6wge77wwg6666we'
    },
    {
        price: '32532',
        title: 'fe7wgv66w5555gwe'
    },
    {
        price: '32532',
        title: 'few8ge77ww4444gwe'
    },
    {
        price: '32532',
        title: 'few2ge77wwgw3333e'
    },
    {
        price: '32532',
        title: 'fe3wgv66wgw2222e'
    },
    {
        price: '32532',
        title: 'few4ge77ww111gwe'
    },
    {
        price: '32532',
        title: 'f1e5wgv66wgwe'
    },
    {
        price: '32532',
        title: 'f2e6wge77wwgwe'
    },
    {
        price: '32532',
        title: 'f3e7wgv66wgwe'
    },
    {
        price: '32532',
        title: 'f4w8ge77wwgwe'
    },
    {
        price: '32532',
        title: 'f45ew2ge77wwgwe'
    },
    {
        price: '32532',
        title: 'f5e3wgv66wgwe'
    },
    {
        price: '32532',
        title: 'f6ew4ge77wwgwe'
    },
    {
        price: '32532',
        title: 'f75wgv66wgwe'
    },
    {
        price: '32532',
        title: 'fe86wge77wwgwe'
    },
    {
        price: '32532',
        title: 'fe97wgv66wgwe'
    },
    {
        price: '32532',
        title: 'fe00w8ge77wwgwe'
    },
    {
        price: '32532',
        title: 'few7852ge77wwgwe'
    },
    {
        price: '32532',
        title: 'fe3467wwgv66wgwe'
    },
    {
        price: '32532',
        title: 'feww3454ge77wwgwe'
    },
    {
        price: '32532',
        title: 'fe5wg6432v66wgwe'
    },
    {
        price: '32532',
        title: 'fe6w34562ge77wwgwe'
    },
    {
        price: '32532',
        title: 'fe7wgv678946wgwe'
    },
    {
        price: '32532',
        title: 'fe54w8ge228477wwgwe'
    },
    {
        price: '32532',
        title: 'fe7446g wgg v678946wgwe'
    },
    {
        price: '32532',
        title: 'fe54w8ww ge8477wwgwe'
    },
    {
        price: '32532',
        title: 'fe7wgvreh 678946wgwe'
    },
    {
        price: '32532',
        title: 'fe54w8gre e8477wwgwe'
    },
    {
        price: '32532',
        title: 'fe7wgfb v678946wgwe'
    },
    {
        price: '32532',
        title: 'fe5gweg4w8ge8477wwgwe'
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
    const [catalogItemsArr, serCatalogItemsArr] = useState(test)

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
                        <div>
                            <FilterComponent
                                title='Price'
                                arr={[]}
                            />
                        </div>
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
                                    <div>
                                        <ActiveFilter
                                            title='Clean filters'
                                            buttonHandler={deleteAllFilters}
                                        />
                                    </div>
                                )}
                                {filters?.map((filter) => (
                                    <div key={filter}>
                                        <ActiveFilter
                                            title={filter}
                                            buttonHandler={deleteActiveFilter(filter)}
                                        />
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
                                            style={sortButtonValue === sort ? {color: '#77a6f7'} : {}}
                                        >
                                            {sort}
                                        </div>
                                    ))}
                                </SlideDown>
                            </div>
                        </div>
                        <div className='itemsContainer'>
                            <div className='itemsBlockContainer'>
                                {catalogItemsArr.map((shopItem) => (
                                    <div key={`shopItem_${shopItem.title}`}>
                                        <CatalogItem
                                            price={shopItem.price}
                                            title={shopItem.title}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='paginationContainer'>
                                <PaginationCatalog
                                    itemsArr={test}
                                    setItemsArr={serCatalogItemsArr}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Catalog }