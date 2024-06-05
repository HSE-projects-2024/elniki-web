import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CreditCardForm from "../components/CreditCardForm";
import { NavLink } from 'react-router-dom';

export const BuyingPage = () => {

    return (
        <div>
            <h1>Оплата</h1>
            <form onSubmit={e => e.preventDefault()} className="w-1/3 h-60 mx-auto mt-10">
                <label> 
                    <div className="container mt-5">
                        <div className="title">Введите данные банковской карты</div>
                        <CreditCardForm />
                    </div>
                </label>
                </form>
                <form onSubmit={e => e.preventDefault()} className="w-1/3 h-60 flex justify-end">
  <label>
    <NavLink to="/buy">
      <button className='submit'>Оплатить</button>
    </NavLink>
  </label>
  <label>
    <div className='info'>
      <p>Билетная касса горнолыжного склона:</p>
      <p>Открыта круглый год</p>
      <p>Пн–Вс: 7:30–21:30</p>
    </div>
  </label>
</form>

        </div>
    );
}
