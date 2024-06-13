import React from 'react';
import "./style.css";

import vk from './../../img/icons/vk.svg';
import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/telegram4.svg';

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
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={vk} alt="VK Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={instagram} alt="Instagram Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#!">
                                <img src={twitter} alt="Twitter Link" />
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
