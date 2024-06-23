.body-page1 {
  background-image: url(../img/gornye_lyzhi.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: auto;
}


.forma {
  font-family: 'Georgia', serif;
  margin: auto;
  display: flex;
  justify-content: center;
}

.order-head {
  background-color: rgba(97, 168, 212, 1);
  padding: 1.3%;
  margin-top: 60px;
  width: 90%;
  height: 100px;
  text-align: center;
  border-radius: 18px;
}

h1 {
  color: black;
}


.text-in-box {
  color: #000; /* Установить цвет основного текста на черный */
  width: 100%;
  border-radius: 0.5rem;
  background-color: #f4f4f4;
  border: 2px solid #000;
  padding: 0.5rem 1rem;
  font-size: 1.05rem;
  outline: none;
  justify-content: center;
  align-items: center;
}

.text-in-box::placeholder {
  color: #000; /* Установить цвет плейсхолдера на черный */
}



.title {
  color: black;
  width: 100%; 
  margin-top: 1em;
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
}

.date {
  color: #fff; 
  width: 100%; 
  margin-top: 1em;
  font-weight: bold;
  font-size: 1em;
  background-color:rgba(232, 32, 55, 0.918);
  border-radius: 20px;
}

.custom-class {
  flex-direction: column;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  text-align:center; 
}  


.info {
  background: #f08b18;
  padding: 10px;
  display: inline-block;
  border-radius: 2px;
  color: black;
  font-family: Arial;
  font-size: 16px;
  margin: 20px; /* устанавливаем одинаковый отступ со всех сторон */
}


.submit {
  margin-top: 20px;
  background-color:rgba(15, 133, 188, 1); 
  padding:10px;
  border-radius: 20px; /* добавляем закругление краев */
  color:white;
  font-size:1.2rem; 
  text-align:center; 
  width: 250px;
  height: 50px;
  justify-content: center;
}
order.css
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