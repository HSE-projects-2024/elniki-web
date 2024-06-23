import React from 'react';
import './RegPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import config from '../../config';

const RegPage = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Password: '',
        ConfirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState({
        Name: false,
        Surname: false,
        Email: false,
        Password: false,
        ConfirmPassword: false,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
        setFormErrors(prevState => ({
            ...prevState,
            [name]: false,
            message: ''
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        let hasError = false;
        for (const key in user) {
            if (!user[key]) {
                errors[key] = true;
                hasError = true;
            } else {
                errors[key] = false;
            }
        }
        if (user.Password !== user.ConfirmPassword) {
            errors.Password = true;
            errors.ConfirmPassword = true;
            hasError = true;
            setFormErrors({
                ...errors,
                message: 'Пароли не совпадают'
            });
            return;
        }
        if (hasError) {
            setFormErrors({
                ...errors,
                message: 'Заполните все поля'
            });
            return;
        }
        try {
            const response = await axios.post(config.regUrl, user);
            console.log(response.data);
            navigate('/login');
        } catch (error) {
            errors.Email = true;
            setFormErrors({
                ...errors,
                message: 'Пользователь уже зарегистрирован'
            });
            console.error('Ошибка при отправке данных:', error);
        }
    };

    return (
        <div className="body-page">
            <div className="reg-container">
                <div className='reg-head'>
                    <h1>Регистрация</h1>
                </div>
                <div className='reg-main'>
                    <p>Уже есть аккаунт? <Link to="/login">Войти</Link></p>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Имя</Form.Label>
                            <Form.Control
                                type="text"
                                name="Name"
                                value={user.Name}
                                onChange={handleChange}
                                className={formErrors.Name ? 'is-invalid' : ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Фамилия</Form.Label>
                            <Form.Control
                                type="text"
                                name="Surname"
                                value={user.Surname}
                                onChange={handleChange}
                                className={formErrors.Surname ? 'is-invalid' : ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="Email"
                                value={user.Email}
                                onChange={handleChange}
                                className={formErrors.Email ? 'is-invalid' : ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                name="Password"
                                value={user.Password}
                                onChange={handleChange}
                                className={formErrors.Password ? 'is-invalid' : ''}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Подтвердите пароль</Form.Label>
                            <Form.Control
                                type="password"
                                name="ConfirmPassword"
                                value={user.ConfirmPassword}
                                onChange={handleChange}
                                className={formErrors.ConfirmPassword ? 'is-invalid' : ''}
                                required
                            />
                        </Form.Group>
                        {formErrors.message && (
                            <div className="invalid-feedback d-block">
                                {formErrors.message}
                            </div>
                        )}
                        <Button variant="dark" size="lg" type="submit" className="submit-button">
                            Зарегистрироваться
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default RegPage;

