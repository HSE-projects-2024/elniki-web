import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardForm from "../components/creditCard/CreditCardForm"
import { useLocation } from 'react-router-dom';
import axios from 'axios';


export const BuyingPage = (props) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    
    const selectedType = queryParams.get('selectedType');
    const quantity = queryParams.get('quantity');
    const date = new Date(queryParams.get('date'));

  
    const handlePayment = () => {
        // Создаем объект с данными для отправки
        const paymentData = {
            selectedType: selectedType,
            quantity: quantity,
            date: date
            // Добавьте сюда данные банковской карты из CreditCardForm
        };
        
    
        // Отправляем данные на сервер
        axios.post('http://localhost:5000/purchaseSkipass', paymentData)
            .then(response => {
                // Обработка успешного ответа
                console.log(response.data);
            })
            .catch(error => {
                // Обработка ошибки
                console.error(error);
            });
    };

    return (
        <body className="body-page1">
            <div>
                <h1 className='order-head'>Оплата</h1>
                <div className='forma'>
                
                    <div className="title">Введите данные банковской карты</div>
                    <CreditCardForm />
                    
                    <button className="submit" onClick={handlePayment}>Оплатить</button>
                    
                    <div className='info'>
                        <p>Билетная касса горнолыжного склона:</p>
                        <p>Открыта круглый год</p>
                        <p>Пн–Вс: 7:30–21:30</p>
                    </div>
                </div>
            </div>
        </body>
    );
}

