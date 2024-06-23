import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardForm from "../components/creditCard/CreditCardForm"
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import config from '../config';

export const BuyingPage = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const selectedType = queryParams.get('selectedType');
  const quantity = queryParams.get('quantity');
  const date = new Date(queryParams.get('date'));

  const handlePayment = () => {
    const paymentData = {
      selectedType: selectedType,
      quantity: quantity,
      date: date
    };

    axios.post(config.buyingUrl, paymentData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
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
