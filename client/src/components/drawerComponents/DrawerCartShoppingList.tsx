import './DrawerCartShoppingList.scss'
import {faShoppingCart, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type cartItem = {
    name: string,
    price: number,
    img: string
}

const test22 :cartItem[] = [
    {
        name: 'firstfirstfirstfirstfirstfirstfiirst first first first first first first first first first first first first first first first first firs first first first first first first first first first first first first first first first first first first first first first',
        price: 23333,
        img: require('../../media/GS_logo512.png')
    },
    {
        name: 'second',
        price: 233,
        img: require('../../media/GS_logo512.png')
    }
]

const DrawerCartShoppingList = (props : any) => {

    const {

    } = props

    return !!test22.length ? (
        <div>
            {test22.map((cartItem) => (
                <div className='cartItemContainer' key={cartItem.name}>
                    <img src={cartItem.img} alt={cartItem.name}/>
                    <div>
                        <div className='cartItemName' >
                            <div>
                                <span title={cartItem.name}>{cartItem.name}</span>
                            </div>
                            <FontAwesomeIcon icon={faTrash}/>
                        </div>
                        <div className='cartItemPrice'>
                            <div>₴ {cartItem.price}</div>
                            <div>
                                <button>-</button>
                                <span>5</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div className="emptyCart">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <span>Your shopping cart is empty</span>
            <span>Add the items you like to your shopping cart</span>
        </div>
    )
}
export { DrawerCartShoppingList }