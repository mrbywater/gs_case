import './Header.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBarsStaggered,
    faBookOpen,
    faCartShopping,
    faMagnifyingGlass,
    faSun,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {DefaultInput} from "../components/inputComponents/DefaultInput";
import {useState} from "react";
import {DefaultButton} from "../components/formComponents/DefaultButton";

const searchInputStyle = {
    width: '400px',
}

const Header = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <header>
            <div className='logo'>
                <FontAwesomeIcon icon={faBarsStaggered} />
                <img src={require('../media/GS_logo512.png')} alt=""/>
            </div>
            <div className='search'>
                <DefaultButton
                    text='Catalog'
                    icon={faBookOpen}
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
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faCartShopping} />
                <FontAwesomeIcon icon={faSun} />
                <div>ENG</div>
            </nav>
        </header>
    )
}
export { Header }