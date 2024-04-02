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

    return (
        <header>
            <div className='logo'>
                <SideDrawer
                    anchor={'left'}
                    icon={faBarsStaggered}
                    iconStyle={{fontSize: '30px'}}
                >
                    <DrawerCatalogList/>
                </SideDrawer>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <img src={require('../media/GS_logo512.png')} alt=""/>
                </Link>
            </div>
            <div className='search'>
                <Link to={'/catalog'} style={{marginRight: '20px', textDecoration: 'none'}}>
                    <DefaultButton
                        text='Catalog'
                        icon={faGrip}
                        // buttonStyle={{marginRight: '20px'}}
                    />
                </Link>
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
                >
                    <DrawerCartShoppingList/>
                </SideDrawer>
            </nav>
        </header>
    )
}
export { Header }