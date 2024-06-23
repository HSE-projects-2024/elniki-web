import React from 'react';

import './About.css';
import About1 from './../img/skierw.svg';
import About2 from './../img/about/wear.png';
import About3 from './../img/about/kobieta.png';


const About = () => {
    return (
        <div className="skipass-container">
            <div className="background-block ski-block1"></div>
            <div className="background-block ski-block2"></div>
            <div className="background-block ski-block3"></div>
            <div className="last-container-ski">
                <ul className="vertical-list width " style={{ gap: '80px' }}>
                    <h1 className="title-1 left-align" >О нас</h1>
                    <img src={About1} className="Large-img" />
                    <li className="content-list__item">
                        <p className="left-align">
                            Поездка на выходные? Зимние каникулы? Или поездка в отпуск? Независимо от того, когда вы отдыхаете, на нашем курорте вы не будете испытывать недостатка в развлечениях!
                            Наши горнолыжные трассы, доступные зимой, обеспечивают безграничное удовольствие от катания на склонах для любителей зимних видов спорта.
                        </p>
                    </li>
                    <img src={About2} className="Large-img" />
                    <li className="content-list__item">
                        <p className="left-align">
                            Мы заботимся о комфорте и безопасности наших гостей. Зимой наша команда опытных инструкторов готова помочь и поддержать всех, кто хочет улучшить свои навыки катания на склонах. Нужны ли вам уроки для начинающих или вы ищете более продвинутое обучение, наша команда всегда готова помочь.</p>
                    </li>

                    <img src={About3} className="Large-img" />
                    <li className="content-list__item">
                        <p className="left-align">
                            Помимо отличных условий для катания, мы предлагаем множество дополнительных развлечений и услуг. Наш просторный пункт проката снаряжения позволит вам подобрать подходящее оборудование, а наши уютные кафе и рестораны - идеальное место для отдыха и восстановления сил после насыщенного дня на склонах.</p>
                    </li>

                    <p className="title-2" style={{ color: 'var(--black)' }}><strong>Информация</strong></p>

                    <li className="content-list__item" >
                        <p className="left-align">Касса горнолыжного спуска<br />Открыта круглый год<br />Пн–Вс: 7:30–21:30
                            <br /><br />Время работы склона<br />Пн–Вс: 8:00–21:00<br />
                            <br />Лыжная школа<br />Тел: +48 123 456 789<br />Почта: szkolka@beskidtime.pl
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
