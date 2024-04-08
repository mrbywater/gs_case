import './DrawerCatalogList.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBriefcase,
    faChevronLeft,
    faChevronRight,
    faMobileButton,
    faMobileScreenButton
} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {RenderCategories} from "./RenderCategories";

const test = [
    {
        title: 'Phone cases',
        icon: faMobileScreenButton,
        data: [
            {
                title: 'Apple',
                data: [
                    '135',
                    '22235',
                    '3555'
                ]
            },
            {
                title: 'Samsung',
                data: [
                    '312432',
                    '23255',
                    '2 35 3'
                ]
            },
            {
                title: 'Nokia',
                data: [
                    '1 3332',
                    '2333785',
                    '2603'
                ]
            }
        ]
    },
    {
        title: 'Protective Glasses',
        icon: faMobileButton,
        data: [
            {
                title: 'Vivo',
                data: [
                    '1',
                    '2',
                    '3'
                ]
            },
            {
                title: 'Oppo',
                data: [
                    '332',
                    '25',
                    '23',
                    '332',
                    '25',
                    '23',
                    '332',
                    '25',
                    '23',
                    '332',
                    '25',
                    '23',
                    '332',
                    '25',
                    '23',
                    '332',
                    '25',
                    '23',
                    '332',
                    '25',
                    '23','332',
                    '25',
                    '23',
                    '332',
                    '25',
                    '23',
                    '332',
                    '25',
                    '23',


                ]
            }
        ]
    },
    {
        title: 'Laptop Backpacks',
        icon: faBriefcase,
    }
]

const DrawerCatalogList = (props : any) => {

    const {

    } = props

    const [categoryStack, setCategoryStack] = useState<any[]>([]);

    const handleCategoryClick = (categoryIndex: any) => () => {
        let uppDate = test[categoryIndex]

        if (categoryStack.length > 0) {
            uppDate = categoryStack[categoryStack.length - 1].data[categoryIndex]
        }

        setCategoryStack([...categoryStack, uppDate]);
    };

    const handleBackClick = () => {
        setCategoryStack(categoryStack.slice(0, -1));
    };

    return (
        <div className='catalogDrawerContainer'>
            {categoryStack.length > 0 &&
                <div className='goBackButtonContainer' onClick={handleBackClick}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <span>{categoryStack[categoryStack.length - 1].title}</span>
                </div>
            }
            <RenderCategories
                handleCategoryClick={handleCategoryClick}
                data={!categoryStack.length ? test : categoryStack[categoryStack.length - 1].data}
                categoryStack={categoryStack}
            />
        </div>
    );
};
export { DrawerCatalogList }