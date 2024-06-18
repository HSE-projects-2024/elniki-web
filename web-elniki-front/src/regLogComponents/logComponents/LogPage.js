import React from 'react';
import './LogPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LogPage = () => {
    return (
        <body class="body-page2">
        <div className='background-page1'>
            <div className='log-head'>
                <h1>Авторизация</h1>
            </div>
            <div className='log-main'>
                <Form>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form>
                <Form>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" />
                </Form>
                <p className='checkbox'>
                    <Form.Check label="Запомнить меня" />
                </p>
            </div>
            <div>
                <Button variant="dark" size="lg">Войти</Button>
            </div>
            <p className='text-center'>Еще нет аккаунта? <Link to="/reg">Зарегистрироваться</Link></p>
        </div>
        </body>
    );
}

export default LogPage;
