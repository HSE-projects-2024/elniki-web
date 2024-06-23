import React from 'react';

import ContactForm from './ContactForm';
import './Contact.css';
import Map from './Map';

function Contact() {
    return (
        <div>
            <div className='vertical-list' style={{gap:'40px', marginTop:'40px'}}>
            <ul className="vertical-list " >
                    <h1 className="title-1 left-align" style={{ color: 'var(--orange600)' }} >Контакт</h1>
                    <h1 className="title-2 left-align" >Напишите нам!</h1>
                    <ContactForm />
                </ul>

                <Map />

            <ul className="vertical-list " >
                    <li className="content-list__item">
                        <p className="left-align">Касса горнолыжного спуска<br />Открыта круглый год<br />Пн–Вс: 7:30–21:30
                        <br /><br />Время работы склона<br />Пн–Вс: 8:00–21:00<br />
                        <br />Лыжная школа<br />Тел: +48 123 456 789<br />Почта: szkolka@beskidtime.pl
                        </p></li>
                </ul>

            </div>


        </div>
    );
}

export default Contact;

