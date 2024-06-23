import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import acc from "./../../img/icons/Account.png";
import menuIcon from "./../../img/menu1.svg";
import "./style.css";
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const Navbar = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setActivePath(location.pathname);
    setOpenMenu(false);
  }, [location]);

  const getLogoClass = () => {
    if (activePath === '/') {
      return 'colored-text-home';
    } else if (activePath.includes('/services')) {
      return 'colored-text-services';
    } else if (activePath.includes('/accommodation')) {
      return 'colored-text-accommodation';
    } else {
      return 'default-text';
    }
  };

  return (
    <nav className="nav">
        <div className="horizontal-list">
          <NavLink to="/" className="logo">
            <span className="bold-text">BE<span className={getLogoClass()}>SKI</span>D TIME</span><br />ЕЛЬНИКИ
          </NavLink>
          <button className="menu-button" onClick={() => setOpenMenu(!openMenu)}>
            <img src={menuIcon} alt="Menu" className="menu-icon" />
          </button>
          
          {openMenu && <DropDownMenu setOpenMenu={setOpenMenu}/>}
          <div className='menu-list'>
          <ul className= "nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"} end>
                Домашняя страница
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/services" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                Услуги
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/accommodation" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                Проживание
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/abouttheresort" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                О курорте
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/order" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                Заказ ски-пасса
              </NavLink>
            </li>
            <Link to="./login" className="account-icon">
            <img src={acc} />
          </Link>
          </ul>

          </div>
        </div>
    </nav>
  );
};

export default Navbar;


