import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import acc from "./../../img/icons/Account.png";
import menuIcon from "./../../img/menu1.svg";
import "./style.css";
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Profile from '../Profile/Profile';

const Navbar = () => {
    const [activePath, setActivePath] = useState(window.location.pathname);
    const [openMenu, setOpenMenu] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [jwtToken, setJwtToken] = useState(null); // Для хранения токена

    useEffect(() => {
        const token = localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');
        console.log(token);
        console.log(localStorage.getItem("jwtToken"))
        setJwtToken(token); // Устанавливаем токен в состояние
    }, []);

    const handleAccountClick = () => {
        if (jwtToken) {
            setOpenProfile(!openProfile);
        } else {
            window.location.href = './login';
        }
    };

    useEffect(() => {
        setActivePath(window.location.pathname);
        setOpenProfile(false);
        setOpenMenu(false);
    }, [window.location.pathname]);

    return (
        <nav className="nav">
            <div className="horizontal-list" style={{ justifyContent: 'center', display: 'flex', margin: 'auto' }}>
                <NavLink to="/" className="logo">
                    <span className="bold-text">BE<span className={activePath === '/' ? 'colored-text-home' : ''}>SKI</span>D TIME</span><br />ЕЛЬНИКИ
                </NavLink>
                <button className="menu-button" onClick={() => setOpenMenu(!openMenu)}>
                    <img src={menuIcon} alt="Menu" className="menu-icon" />
                </button>
                <Link to="#" className="account-icon" onClick={handleAccountClick}>
                    <img src={acc} alt="Account" />
                </Link>
                {openMenu && <DropDownMenu setOpenMenu={setOpenMenu} />}
                {openProfile && <Profile setOpenProfile={setOpenProfile} />}
                <div className='menu-list'>
                    <ul className="nav-list">
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
                            <NavLink to="/abouttheresort" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                                О курорте
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/order" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                                Заказ ски-пасса
                            </NavLink>
                        </li>
                        {jwtToken && (
                            <li className="nav-list__item">
                                <NavLink to="/myskipass" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                                    Мои скипассы
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

