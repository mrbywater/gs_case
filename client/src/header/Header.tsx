import './Header.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCartShopping, faMagnifyingGlass, faSun, faUser} from "@fortawesome/free-solid-svg-icons";
import {DefaultInput} from "../components/inputComponents/DefaultInput";
import {useState} from "react";

const searchInputStyle = {
    width: '400px',
}

const Header = () => {

    const [searchValue, setSearchValue] = useState('')

    return (
        <header>
            <div className='logo'>
                <FontAwesomeIcon icon={faBars} />
                <img src={require('../media/GS_logo512.png')} alt=""/>
            </div>
            <div className='search'>
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