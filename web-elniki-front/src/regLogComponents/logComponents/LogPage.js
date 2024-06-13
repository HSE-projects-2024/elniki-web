import React from 'react';
import './LogPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const LogPage = () => {
    return (
        <div>
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
                <Form>
                    <Form.Group>
                        <Form.Check label="Запомнить меня" />
                    </Form.Group>
                </Form>
            </div>
            <div className='text-center'>
                <Button variant="dark" size="lg">Войти</Button>
            </div>
            <p>Еще нет аккаунта? <Link to="/reg">Зарегистрироваться</Link></p>
        </div>
    );
}

export default LogPage;
