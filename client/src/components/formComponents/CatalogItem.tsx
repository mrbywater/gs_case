import './CatalogItem.scss'
import {DefaultButton} from "./DefaultButton";
import {faCartShopping, faGuaraniSign} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CatalogItem = (props : any) => {

    const {
        title,
        price,
        img
    } = props

    const itemImage = img ? require(img) : require("../../media/GS_logo512.png")

    return (
        <div className='itemMainContainer'>
            <div className='imageContainer'>
                <img src={itemImage} alt=""/>
            </div>
            <div className='descriptionContainer'>
                <div className='title'>
                    <span title={title}>{title}</span>
                </div>
                <div className='priceContainer'>
                    <div className='price'>
                        <span>{price}</span>
                        <FontAwesomeIcon icon={faGuaraniSign} />
                    </div>
                    <DefaultButton
                        icon={faCartShopping}
                        text='Buy now'
                        buttonStyle={{background: '#53900F'}}
                    />
                </div>
            </div>
        </div>
    )
}
export { CatalogItem }