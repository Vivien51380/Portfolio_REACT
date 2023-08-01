import './header.css';
import data from './data';
import HeaderImage from '../../assets/moi.jpeg';


const Header = () => {
  return (
    <section id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Vivien Méreaux</h3>
        <p>Bienvenue sur mon portfolio</p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Contactez Moi</a>
          <a href="#portfolio" className='btn light'>Mes Projets</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
          }
        </div>
      </div>
    </section>
  )
};

export default Header;