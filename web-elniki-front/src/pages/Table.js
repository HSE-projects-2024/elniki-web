import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Table.css';
import Kasina from './../img/Kasina.svg';
import pobrane from './../img/pobrane.svg';

const Table = () => {

    const [skipassTypes, setSkipassTypes] = useState([]);

    useEffect(() => {
        const fetchSkipassTypes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getSkipasses');
                setSkipassTypes(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchSkipassTypes();
    }, []);
    return (
        <div className="resort-container2">

            <div className="background-block2 white-block2"></div>
            <div className="background-block2 Brownish-block"></div>
            <div className="image-Kasina-container">
                <img src={Kasina} className="Large-img" />
            </div>
            <div className="table-container">
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col">Тип скипасса</th>
                            <th scope="col">Тариф "Взрослый"</th>
                            <th scope="col">Тариф "Детский"</th>
                            <th scope="col">Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Стоимость карты</td>
                            <td colSpan="2">300 руб.</td>
                            <td>Карта обеспечивает доступ к основным подъемникам на территории курорта</td>
                        </tr>
                        {skipassTypes.map(skipass => (
                            <tr key={skipass.SkiPassID}>
                                <td>{skipass.skiPassType}</td>
                                <td>{skipass.Price}</td>
                                <td>{skipass.ChildPrice}</td>
                                <td>{skipass.Description}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>VIP-подъемник на 1 день </td>
                            <td colSpan="2">15000 руб.</td>
                            <td>Подъемник высокого уровня сервиса с индивидуальным обслуживанием и комфортными условиями </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='map-container'>
                <ul className="vertical-list">
                    <p style={{ color: 'var(--white)', fontSize: 'var(--xlarge)', padding: '50px' }}><span className="bold-text">Адрес</span>
                        <br />Деревня Ельники, 1 <br />Добрянский городской округ, <br />Пермский край, 618719</p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2103.2188477127124!2d56.505337778016866!3d58.18714127408153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8d12555555555%3A0x8cf87acd5a20e717!2sYel&#39;niki%2C%20Gornolyzhnaya%20Baza!5e0!3m2!1sen!2sru!4v1718486517147!5m2!1sen!2sru"
                        width="600px"
                        height="600px"
                        style={{ border: '5px solid var(--Green400)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </ul>
            </div>
            <a href="/abouttheresort" className="button skipass-button">Скипассы</a>
            <a href="/contact" className="button contact-button">Контакты</a>
            <div className="background-block2 white-block22"></div>
            <div className="background-block2 green-block"></div>
            <div className="last-container">
                <ul className="vertical-list" style={{gap: '240px'}}>
                    <p className="title-2"><strong>Присоединяйтесь к нам!</strong></p>
                    <img src={pobrane} className="Large-img" />
                </ul>
            </div>
        </div>
    );
};

export default Table;
