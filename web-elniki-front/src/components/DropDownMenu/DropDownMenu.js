import React from 'react';
import "./DropDownMenu.css";
import Exit from "./../../img/Exit.svg";
import close from "./../../img/closemenu.svg";
import { Link, NavLink, useNavigate } from 'react-router-dom';

const DropDownMenu = ({ setOpenMenu }) => {
    const navigate = useNavigate();
    const jwtToken = localStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken');

    const handleLogoutAndRedirectHome = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/');
        setOpenMenu(false); // Закрываем меню
    };

    const handleLogoutAndRedirectToReg = () => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/reg');
        setOpenMenu(false); // Закрываем меню
    };

    return (
        <div className='flex flex-col dropDownMenu'>
            <ul className='flex flex-col gap-4 vertical-list'>
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
                {!jwtToken && (
                    <li className="nav-list__item">
                        <NavLink to="/login" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                            Профиль
                        </NavLink>
                    </li>
                )}
                {jwtToken && (
                    <>
                        <li className="nav-list__item">
                            <NavLink to="/myskipass" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                                Мои скипассы
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="#" className="nav-list__link" onClick={handleLogoutAndRedirectHome}>
                                Сменить пользователя
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <Link to="#" onClick={handleLogoutAndRedirectToReg}>
                                <img src={Exit} className='closeButton' alt="Close" />
                            </Link>
                        </li>
                    </>
                )}
                <li className="nav-list__item">
                    <Link to="#" onClick={() => setOpenMenu(false)}>
                        <img src={close} className='closeButton' alt="Close" />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default DropDownMenu;


