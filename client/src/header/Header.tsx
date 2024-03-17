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
                <FontAwesomeIcon icon={faBarsStaggered} />
                <img src={require('../media/GS_logo512.png')} alt=""/>
            </div>
            <div className='search'>
                <DefaultButton
                    text='Catalog'
                    icon={faGrip}
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
                <FontAwesomeIcon icon={faCartShopping} />
            </nav>
        </header>
    )
}
export { Header }