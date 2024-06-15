import React from 'react';
import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import telegram from './../../img/icons/telegram4.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__column address">
                        <p>деревня Ельники​</p>
						<p>Добрянский городской округ​</p>
						<p>Пермский край​</p>
                    </div>
                    <ul className="horizontal-list">
                        <li className="social__item">
                            <a href="https://vk.com/eugen.isay">
                                <img src={vk} alt="VK Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.instagram.com/nellkree?igsh=b2FzczRtaWR1cXBi">
                                <img src={instagram} alt="Instagram Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://t.me/NellKree">
                                <img src={telegram} alt="Twitter Link" />
                            </a>
                        </li>
                    </ul>
                    <div className="footer__column contact">
                        <p>Email: elniki-glc@mail.ru</p>
                        <p>Phone: +79024718604</p>
                    </div>
                </div>
                <div className="copyright">
                    <p>© 2024 Elniki</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
