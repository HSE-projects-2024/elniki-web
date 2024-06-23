import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Order.css';
import Calendar from '../components/Calendar';

export const OrderPage = () => {
    const [date, setDate] = useState(null);
    const [skipAssTypes, setSkipAssTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [quantity, setQuantity] = useState(1); // Добавляем состояние для хранения количества
    const [price, setPrice] = useState(0); // Добавляем состояние для хранения цены

    useEffect(() => {
        fetch('http://localhost:3001/getSkipassTypes')
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

    const handleOrderClick = async () => {
        try {
        // Передача данных на страницу /buy
        const orderData = {
            selectedType,
            quantity,
            date
        };
        // encodeURIComponent используется для корректной передачи параметров URL
        const queryParams = new URLSearchParams(orderData).toString();
         // Проверка страницы /buy
         const buyResponse = await fetch(`/buy?${queryParams}`);
         if (!buyResponse.ok) {
             throw new Error('Ошибка: Страница /buy не найдена или не может быть загружена');
         }
 
         // Проверка страницы /payment
         const paymentResponse = await fetch(`/payment?${queryParams}`);
         if (!paymentResponse.ok) {
             throw new Error('Ошибка: Страница /payment не найдена или не может быть загружена');
         }
        window.location.href = `/buy?${queryParams}`;
        window.location.href = `/payment?${queryParams}`;
        localStorage.setItem('orderData', JSON.stringify(orderData));

        window.location.href = '/payment';
    } catch (error) {
        console.error('Произошла ошибка при обработке заказа:', error);
        }
    };

    return (
        <div className="body-page1">
            <div className="order-container">
                <div className='order-head'>
                    <h1>Заказ ски-пасса</h1>
                </div>
                <div className='order-form'>
                    <div className="form-group">
                        <label className="title">Тип ски-пасса</label>
                        <select id="typeSelect" value={selectedType} onChange={handleTypeChange} className="text-in-box">
                            <option value="">Выберите тип ски-пасса</option>
                            {
                                skipAssTypes.map(skipAssType => (
                                    <option key={skipAssType.id} value={skipAssType.id}>{skipAssType.skiPassType}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="title">Количество</label>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min="1" className="text-in-box" />
                    </div>
                    <div className="form-group">
                        <label className="title">Выберите дату</label>
                        <div>
                            {date && <p className='date'>Выбранная дата: {date.toLocaleDateString()}</p>}
                            <Calendar onChange={handleDateChange} />
                        </div>
                    </div>
                    <button className='submit' onClick={handleOrderClick}>Заказать</button>
                    <div className='info'>
                        <p>Билетная касса горнолыжного склона:</p>
                        <p>Открыта круглый год</p>
                        <p>Пн–Вс: 7:30–21:30</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
