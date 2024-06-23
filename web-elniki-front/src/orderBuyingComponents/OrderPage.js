import React, { useState, useEffect } from 'react';
import './Order.css';
import Calendar from '../components/Calendar';
import config from '../config';

export const OrderPage = () => {
    const [date, setDate] = useState(null);
    const [skipAssTypes, setSkipAssTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(config.orderUrl)
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

    const handleOrderClick = () => {
        const orderData = {
            selectedType,
            quantity,
            date
        };
        const queryParams = new URLSearchParams(orderData).toString();
        window.location.href = `/buy?${queryParams}`;
        window.location.href = `/payment?${queryParams}`;
        localStorage.setItem('orderData', JSON.stringify(orderData));

        window.location.href = '/payment';
    };

    return (
        <body className="body-page1">
            <div>
                <div className='order-head'>
                    <h1>Заказ ски-пасса</h1>
                </div>
                <div className='forma'>

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
                    <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min="1" className="text-in-box" />

                    <div className="title">Выберите дату</div>
                    <div>
                        {date && <p className='date'>Выбранная дата: {date.toLocaleDateString()}</p>}
                        <Calendar onChange={handleDateChange} />
                    </div>

                    <button className='submit' onClick={handleOrderClick}>Заказать</button>

                    <div className='info'>
                        <p>Билетная касса горнолыжного склона:</p>
                        <p>Открыта круглый год</p>
                        <p>Пн–Вс: 7:30–21:30</p>
                    </div>
                </div>
            </div>
        </body>
    );
};
