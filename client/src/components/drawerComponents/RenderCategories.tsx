import './RenderCategories.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const RenderCategories = (props : any) => {

    const {
        handleCategoryClick,
        data,
        categoryStack,
    } = props


    return (
        <div>
            {data.map((category: any, index: any) => (
                <div
                    key={index}
                    className='drawerSelect'
                    onClick={category.data ? handleCategoryClick(index) : () => {}}
                >
                    {!categoryStack.length &&
                        <FontAwesomeIcon
                            icon={category.icon}
                            className='subCategoryIcon'
                        />
                    }
                    {category?.title ? category?.title : category}
                    {category.data &&
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className='openCategoryArrow'
                        />
                    }
                </div>
            ))}
        </div>
    );
}
export { RenderCategories }