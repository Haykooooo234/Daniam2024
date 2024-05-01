import './Navbar.css';
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import useNavbar from './use.Navbar';
import img1 from './img/logo.svg';

const Navbar = () => {
 
  const { 
    showMenu,
    toggleMenu,
    closeMenuOnMobile,
    handleScrollToTop,
   } = useNavbar();

  return (
    <header className="header">
    <nav className="nav container">
    <img src={img1} alt="" />
      {/* <div className="nav__logo">
        <h6>daniam</h6>
      </div> */}

      <div
        className={`nav__menu ${showMenu ? "show-menu" : ""}`}
        id="nav-menu"
      >
        <ul className="nav__list">

          <li className="nav__item">
            <NavLink 
              to="/" 
              className="nav__link" 
              onClick={() => {
                closeMenuOnMobile();
                handleScrollToTop();
              }}
            >
              HOME
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink 
              to="/services" 
              className='nav__link'
              onClick={() => {
                closeMenuOnMobile();
                handleScrollToTop();
              }}            >
              Services
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/partners"
              className='nav__link'  
              onClick={() => {
                closeMenuOnMobile();
                handleScrollToTop();
              }}            
            >
              PARTNERS
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/projects"
              className='nav__link'  
              onClick={() => {
                closeMenuOnMobile();
                handleScrollToTop();

              }}            
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/team"
              className='nav__link'  
              onClick={() => {
              closeMenuOnMobile();
              handleScrollToTop();
              }}            
            >
              Team
            </NavLink>
          </li>
          
        </ul>
        
        <div 
          className="nav__close" 
          id="nav-close" 
          onClick={toggleMenu}
          >
          <IoClose />
        </div>
      </div>

      <div 
        className="nav__toggle" 
        id="nav-toggle" 
        onClick={toggleMenu}
        >
        <IoMenu />
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
