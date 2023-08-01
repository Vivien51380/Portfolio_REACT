import Logo from '../../assets/Logo.jpg';
import './navbar.css';
import data from './data';
import {BiColor} from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="Accueil" className='nav__logo'>
          <img src={Logo} alt="Logo" />
        </a>
          <ul className='nav__menu'>
            {
              data.map(item => <li key={item.id}><a href={item.linl}>{item.title}</a></li>)
            }
          </ul>
          <button id='theme__icon'><BiColor /></button>
      </div>
    </nav>
  )
}

export default Navbar;