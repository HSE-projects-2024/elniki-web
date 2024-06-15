import React from 'react';
import './Table.css';
import Kasina from './../img/Kasina.svg';
import pobrane from './../img/pobrane.svg';

const Table = () => {
    return (
        <div className="resort-container2">
            
            <div className="background-block2 white-block2"></div>
            <div className="background-block2 Brownish-block"></div>
            <div className="image-Kasina-container">
                <img src={Kasina}  className="skier-image2" />
            </div>
            <div className="table-container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Тип скипасса</th>
                    <th scope="col">Тариф "Взрослый"</th>
                    <th scope="col">Тариф "Детский"</th>
         
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                    <td>Стоимость карты</td>
                    <td colSpan="2">100 руб.</td>
                    </tr>

                    <tr>
                    <td>Разовый подъём на подъёмнике</td>
                    <td>300 руб.</td>
                    <td>200 руб.</td>
                    </tr>

                    <tr>
                    <td>Прогулочный тариф <br />(подъем и спуск на кресельном подъемнике)</td>
                    <td>500 руб.</td>
                    <td>400 руб.</td>
                    </tr>

                    <tr>
                    <td>Подъемник на 1 день</td>
                    <td>2000 руб.</td>
                    <td>1200 руб.</td>
                    </tr>

                    <tr>
                    <td>Учебный подъемник</td>
                    <td>550 руб.</td>
                    <td>450 руб.</td>
                    </tr>

                    <tr>
                    <td>VIP-подъемник на 1 день </td>
                    <td colSpan="2">5000 руб.</td>
                    </tr>

                </tbody>
                </table>
            </div>
            <div className='map-container'>
                <ul className="vertical-list">
                    <p style={{color:'#fff', fontSize:'24px', padding: '50px'}}><span className="bold-text">Адрес</span>
                    <br />Деревня Ельники, 1 <br />Добрянский городской округ, <br />Пермский край, 618719</p>
                                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2103.2188477127124!2d56.505337778016866!3d58.18714127408153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8d12555555555%3A0x8cf87acd5a20e717!2sYel&#39;niki%2C%20Gornolyzhnaya%20Baza!5e0!3m2!1sen!2sru!4v1718486517147!5m2!1sen!2sru" 
                    width="600px" 
                    height="600px" 
                    style={{border: '5px solid #F89434'}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                </ul>
            </div>
            <a href="/abouttheresort" className="skipass-button">Скипассы</a>
            <a href="/contact" className="contact-button">Контакты</a>
            <div className="background-block2 white-block22"></div>
            <div className="background-block2 green-block"></div>
            <div className="last-container">
            <ul className="vertical-list">
                    <p className="title-2" style={{padding:'200px'}}><strong>Присоединяйтесь к нам!</strong></p>
                    <img src={pobrane}  className="skier-image2" />           
                </ul>
            </div>
        </div>
    );
};

export default Table;
