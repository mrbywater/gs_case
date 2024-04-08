import './Header.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBarsStaggered,
    faCartShopping,
    faGrip,
    faMagnifyingGlass,
    faSun,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {DefaultInput} from "../components/inputComponents/DefaultInput";
import {useState} from "react";
import {DefaultButton} from "../components/formComponents/DefaultButton";
import {SideDrawer} from "../components/drawerComponents/SideDrawer";
import {DrawerCatalogList} from "../components/drawerComponents/DrawerCatalogList";
import {DrawerCartShoppingList} from "../components/drawerComponents/DrawerCartShoppingList";
import {Link} from "react-router-dom";

const searchInputStyle = {
    width: '45%',
    maxWidth: '800px',
    borderRadius: '10px'
}

const Header = () => {

    const [searchValue, setSearchValue] = useState('')
    const [openCatalog, setOpenCatalog] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    return (
        <header>
            <div className='logo'>
                <SideDrawer
                    anchor={'left'}
                    icon={faBarsStaggered}
                    iconStyle={{fontSize: '30px'}}
                    title='Catalog'
                    setOpen={setOpenCatalog}
                    open={openCatalog}
                >
                    <DrawerCatalogList/>
                </SideDrawer>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <img src={require('../media/GS_logo512.png')} alt=""/>
                </Link>
            </div>
            <div className='search'>
                <DefaultButton
                    text='Catalog'
                    icon={faGrip}
                    onClickFunc={()=> setOpenCatalog(true)}
                    buttonStyle={{marginRight: '20px'}}
                />
                <DefaultInput
                    placeholder='Search'
                    inputStyle={searchInputStyle}
                    inputType='text'
                    icon={faMagnifyingGlass}
                    setValue={setSearchValue}
                    value={searchValue}
                />
            </div>
            <nav>
                <FontAwesomeIcon icon={faSun} />
                <div>ENG</div>
                <FontAwesomeIcon icon={faUser} />
                <SideDrawer
                    anchor={'right'}
                    icon={faCartShopping}
                    title='Cart'
                    setOpen={setOpenCart}
                    open={openCart}
                >
                    <DrawerCartShoppingList/>
                </SideDrawer>
            </nav>
        </header>
    )
}
export { Header }