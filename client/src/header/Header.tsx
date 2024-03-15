import './Header.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faMagnifyingGlass, faUser} from "@fortawesome/free-solid-svg-icons";
import {navMenuButtons} from '../info-list'

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <img src={require('../media/GS_logo_light512.png')} alt=""/>
            </div>
            <div className='navContainer'>
                <nav className='navPages'>
                    {navMenuButtons.map((navButton) => (
                        <div key={navButton.eng}>{navButton.eng}</div>
                    ))}
                </nav>
                <nav className='navUser'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faCartShopping} />
                    <div>ENG</div>
                </nav>
            </div>
        </header>
    )
}
export { Header }