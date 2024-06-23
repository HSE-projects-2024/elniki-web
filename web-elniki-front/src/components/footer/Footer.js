import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import telegram from './../../img/icons/telegram4.svg';
import map from './../../img/icons/map.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="address contact-info">
                    <p>деревня Ельники</p>
                    <p>Добрянский городской округ</p>
                    <p>Пермский край</p>
                </div>
                <div className="social-links">
                    <Link to="https://maps.app.goo.gl/XvufauVb4XqgrpYK7" className="social__item">
                        <img src={map} alt="Map" />
                    </Link>
                    <Link to="https://vk.com/eugen.isay" className="social__item">
                        <img src={vk} alt="VK" />
                    </Link>
                    <Link to="https://www.instagram.com/nellkree?igsh=b2FzczRtaWR1cXBi" className="social__item">
                        <img src={instagram} alt="Instagram" />
                    </Link>
                    <Link to="https://t.me/NellKree" className="social__item">
                        <img src={telegram} alt="Telegram" />
                    </Link>
                </div>
                <div className="contact contact-info">
                    <p>Почта: elniki-glc@mail.ru</p>
                    <p>Телефон: +79024718604</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Elniki</p>
            </div>
        </footer>
    );
}

export default Footer;
