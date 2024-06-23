import React from 'react';
import "./Profile.css";
import close from "./../../img/Exit.svg";
import Exit from "./../../img/closemenu.svg";
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Profile = ({ setOpenProfile }) => {
    const navigate = useNavigate();

    const handleLogoutAndRedirectHome = () => {
        localStorage.clear();
        sessionStorage.clear();
 
        window.location.href = './reg';
        setOpenProfile(false); // Закрываем меню
    };

    const handleLogoutAndRedirectToReg = () => {
        localStorage.clear();
        sessionStorage.clear();
    
        window.location.href = './';
        setOpenProfile(false); // Закрываем меню
    };

    return (
        <div className='flex flex-col dropDownMenu'>
            <ul className='flex flex-col gap-4 vertical-list'>
                <li className="nav-list__item">
                    <NavLink to="#" className="nav-list__link" onClick={handleLogoutAndRedirectHome}>
                        Сменить пользователя
                    </NavLink>
                </li>
                <li className="nav-list__item">
                    <Link to="#" onClick={handleLogoutAndRedirectToReg}>
                        <img src={close} className='closeButton' alt="Close" />
                    </Link>
                </li>
                <li className="nav-list__item">
                    <Link to="#" onClick={() => setOpenProfile(false)}>
                        <img src={Exit} className='closeButton' alt="Close" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Profile;
