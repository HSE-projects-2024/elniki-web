import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardForm from "../components/creditCard/CreditCardForm"

export const BuyingPage = () => {

    return (
        <body class="body-page1">
        <div>
            <div className='order-head'>
                <h1>Оплата</h1>
            </div>
                <label> 
                    <div>
                        <div className="title">Введите данные банковской карты</div>
                        <CreditCardForm />
                    </div>
                </label>            
                <label>
                  <div className='info'>
                    <p>Билетная касса горнолыжного склона:</p>
                    <p>Открыта круглый год</p>
                    <p>Пн–Вс: 7:30–21:30</p>
                  </div>
                </label>
        </div>
        </body>
    );
}
