import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [notRobot, setNotRobot] = useState(false);
    const [agreeRODO, setAgreeRODO] = useState(false);
    const [sendCopy, setSendCopy] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!message || !email || !notRobot) {
            setError('Пожалуйста, заполните все обязательные поля.');
            setSuccessMessage(''); // Скрыть сообщение об успешной отправке, если оно было видимо
        } else {
            setError('');
            
            try {
                const response = await fetch('http://localhost:3001/submitContactForm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message,
                        email,
                        agreeRODO,
                        sendCopy,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Ошибка при отправке формы');
                }

                setSuccessMessage('Форма успешно отправлена!');

                // Скрыть сообщение об успешной отправке через 3 секунды
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);

                setMessage('');
                setEmail('');
                setNotRobot(false);
                setAgreeRODO(false);
                setSendCopy(false);
            } catch (error) {
                console.error('Ошибка при отправке данных формы:', error);
                setError('Ошибка при отправке данных формы.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <label>
                Сообщение *
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </label>
            <label>
                Электронный адрес *
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <div className="checkboxes">
                <label>
                    <input
                        type="checkbox"
                        checked={notRobot}
                        onChange={(e) => setNotRobot(e.target.checked)}
                        required
                    />
                    Я не робот *
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={agreeRODO}
                        onChange={(e) => setAgreeRODO(e.target.checked)}
                    />
                    Я согласен с GDPR (необязательно)
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={sendCopy}
                        onChange={(e) => setSendCopy(e.target.checked)}
                    />
                    Отправьте мне копию (необязательно)
                </label>
            </div>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <button type="submit" className="button contact-button">Отправить</button>
        </form>
    );
};

export default ContactForm;
