import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Order.css';
import Calendar from '../components/Calendar';

export const OrderPage = () => {
    const [date, setDate] = useState(null);
    const [skipAssTypes, setSkipAssTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/getSkipassTypes')
            .then(response => response.json())
            .then(data => setSkipAssTypes(data))
            .catch(error => console.error('Error fetching skipass types: ', error));
    }, []);

    const handleDateChange = date => {
        setDate(date);
    };

    const handleTypeChange = (e) => {
        const selectedTypeId = e.target.value;
        setSelectedType(selectedTypeId);
    };

    return (
        <body className="body-page1">
            <div>
                <div className='order-head'>
                    <h1>Заказ ски-пасса</h1>
                </div>
                
                <div className="title">Тип ски-пасса</div>
                <select id="typeSelect" value={selectedType} onChange={handleTypeChange} className="text-in-box">
                    <option value="">Выберите тип ски-пасса</option>
                    {
                        skipAssTypes.map(skipAssType => (
                            <option key={skipAssType.id} value={skipAssType.id}>{skipAssType.skiPassType}</option>
                        ))
                    }
                </select>
                <div className="title">Количество</div>
                <input type="text" placeholder="1" className="text-in-box" />

                <div className="title">Выберите дату</div>
                <div>
                    {date && <p className='date'>Выбранная дата: {date.toLocaleDateString()}</p>}
                    <Calendar onChange={handleDateChange} />
                </div>


                <NavLink to="/buy">
                    <button className='submit'>Заказать</button>
                </NavLink>

                <div className='info'>
                    <p>Билетная касса горнолыжного склона:</p>
                    <p>Открыта круглый год</p>
                    <p>Пн–Вс: 7:30–21:30</p>
                </div>

            </div>
        </body>
    );
}
