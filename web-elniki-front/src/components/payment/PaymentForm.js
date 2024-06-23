import React, { useState, useEffect } from 'react';
import './PaymentForm.css';
import axios from 'axios';
import config from '../../config';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const storedData = localStorage.getItem('orderData');
    const orderData = storedData ? JSON.parse(storedData) : {};
    const [skiPassPrice, setSkiPassPrice] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:3001/getSkipassPrice?SkiPassTypeId=${orderData.selectedType}&quantity=${orderData.quantity}`)
            .then(response => {
                setSkiPassPrice(response.data.price);
            })
            .catch(error => {
                console.error(error);
            });
    }, [orderData.selectedType, orderData.quantity]);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(config.paymentUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ skiPassPrice }),
            });
            const data = await response.json();
            if (data.payment && data.payment.confirmation && data.payment.confirmation.confirmation_url) {
                // После успешного платежа
                // Вызываем функцию для добавления данных в базу данных
                handlePayment();
                window.location.href = data.payment.confirmation.confirmation_url;
            } else {
                console.error('Ошибка: Не удалось получить URL платежной формы от YooKassa');
            }
        } catch (error) {
            console.error('Произошла ошибка при обработке платежа:', error);
        }
    }

    const handlePayment = () => {
        // Создаем объект с данными для отправки
        const paymentData = {
            selectedType: orderData.selectedType,
            quantity: orderData.quantity,
            date: orderData.date
        };

        // Отправляем данные на сервер для добавления в базу данных
        axios.post(config.buyingUrl, paymentData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div class="payment-form">
            <h2 class="label">Форма оплаты</h2>
            <form onSubmit={handlePaymentSubmit}>
                <label>
                    Сумма оплаты:
                    <div>Цена ски-пасса: {skiPassPrice}</div>
                </label>
                <button type="submit">Оплатить</button>
            </form>
            <div>

            </div>
        </div>
    );
}

export default PaymentForm;
