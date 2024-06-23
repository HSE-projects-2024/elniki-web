import React from 'react'
import "./DropDownMenu.css";

import close from "./../../img/closemenu.svg";
import { Link, NavLink } from 'react-router-dom';
const DropDownMenu = ({ setOpenMenu }) => {
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
                <li className="nav-list__item">
                    <NavLink to="/login" className={({ isActive }) => isActive ? "nav-list__link nav-list__link--active" : "nav-list__link"}>
                        Профиль
                    </NavLink>
                </li>
                <li className="nav-list__item">
                <Link  onClick={() => setOpenMenu(false)}>
                    <img src={close}  className='closeButton'/>
                </Link>
                </li>
            </ul>
        </div>
    )
}

export default DropDownMenu
