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
        try {
            const response = await axios.post(config.loginUrl, user);
            console.log(response.data);
            if (response.data.jwtToken) {
                if (rememberMe) {
                    localStorage.setItem('userData', JSON.stringify({
                        UserID: response.data.UserID,
                        jwtToken: response.data.jwtToken
                    }));
                } else {
                    sessionStorage.setItem('userData', JSON.stringify({
                        UserID: response.data.UserID,
                        jwtToken: response.data.jwtToken
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
                        {formErrors.message && (
                            <div className="invalid-feedback d-block">
                                {formErrors.message}
                            </div>
                        )}
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
            </div>
        </div>
    );
}

export default LogPage;
