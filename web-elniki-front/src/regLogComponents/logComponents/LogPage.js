import React, { useState } from 'react';
import './LogPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';

const LogPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ Email: '', Password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [formErrors, setFormErrors] = useState({ Email: false, Password: false, message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(config.loginUrl, user);
            if (response.data.token) {
                if (rememberMe) {
                    localStorage.setItem('userData', JSON.stringify({
                        userId: response.data.userId,
                        token: response.data.token
                    }));
                } else {
                    sessionStorage.setItem('userData', JSON.stringify({
                        userId: response.data.userId,
                        token: response.data.token
                    }));
                }
                navigate('/');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setFormErrors({ ...formErrors, message: error.response.data.message });
            } else {
                setFormErrors({ ...formErrors, message: 'Server error' });
            }
        }
    };

    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div className='body-page2'>
            <div className='background-page1'>
                <div className='log-head'>
                    <h1>Авторизация</h1>
                </div>
                <div className='log-main'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="Email"
                                value={user.Email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                name="Password"
                                value={user.Password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <p className='checkbox'>
                            <Form.Check
                                label="Запомнить меня"
                                checked={rememberMe}
                                onChange={handleRememberMe}
                            />
                        </p>
                        <Button variant="dark" size="lg" type="submit">Войти</Button>
                    </Form>
                </div>
                <p className='text-center'>Еще нет аккаунта? <Link to="/reg">Зарегистрироваться</Link></p>
                {formErrors.message && <p className="error-message">{formErrors.message}</p>}
            </div>
        </div>
    );
}

export default LogPage;
