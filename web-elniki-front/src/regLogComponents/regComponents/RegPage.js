import React from 'react';
import './RegPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const RegPage = () => {
    return (
        <body class="body-page2">
        <div>
            <div className='reg-head'>
                <h1>Регистрация</h1>
            </div>
            <div className='reg-main'>
                <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
                <Form>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" />
                </Form>
                <Form>
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" />
                </Form>
                <Form>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form>
                <Form>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" />
                </Form>
                <Form>
                    <Form.Label>Подтвердите пароль</Form.Label>
                    <Form.Control type="password" />
                </Form>
            </div>
            <p className='text-center'>
                <Button variant="dark" size="lg">Зарегистрироваться</Button>
            </p>
        </div>
        </body>
    );
}

export default RegPage;
