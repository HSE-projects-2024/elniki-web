import React from 'react';
import './skipass.css';
import Skipass1 from './../img/ski lift picture 1.png';
import Skipass2 from './../img/Podobne.png';

const skipass = () => {
    return (
        <div className="lift-services">
            <div className="background-block BR-block-skipass"></div>
            <div className='vertical-list'>
            <div className="image-container">
                <img src={Skipass1} className="service-image" />
                <div className="service-title">
                    Услуги подъемника
                </div>
            </div>
            <div className="service-details">
                <p> для детей и взрослых</p>
                <p> С 8:00 до 21:00</p>
                <p> залог включен в стоимость</p>
            </div>
            <a href="/order" className="button order-button" style={{textAlign:'center'}}>Заказать</a>
      
            <div className="how-it-works"style={{zIndex:'5'}}>
                <h2>Как это работает?</h2>
                <p><strong>1. Выбор дат:</strong> После нажатия кнопки "Заказать" мы указываем даты, в которые собираемся использовать skipass. Для многодневных ski-pass-ов мы выбираем диапазон дат.</p>
                <p><strong>2. Предоставление информации:</strong> В процессе покупки мы предоставляем такую информацию, как имя, фамилия, адрес электронной почты.</p>
                <p><strong>3. Оплата:</strong> Горнолыжный курорт предлагает способы оплаты включающие банковские переводы или электронные платежные системы.</p>
                <p><strong>4. Подтверждение и получение skipass:</strong> После оплаты мы получаем подтверждение на email в виде электронного письма или ваучер. Предъявите подтверждение или ваучер в пункте проката на Склоне, где вам получат skipass.</p>
            </div>
            <img src={Skipass2} className="Large-img" style={{zIndex:'5', padding:'20px'}}/>
             <a href="./abouttheresort" className="button view-button-green-skipass" style={{zIndex:'5'}}>Откройте для себя</a> 
            </div>
            
        </div>
    );
};

export default skipass;
