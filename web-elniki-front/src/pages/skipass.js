import React from 'react';
import './skipass.css';
import Skipass1 from './../img/ski lift picture 1.png';
import Skipass2 from './../img/Podobne.svg';

const skipass = () => {
    return (
        <div className="lift-services">
            <div className='vertical-list' style={{gap:'40px'}}>
            <div className="image-container" style={{backgroundColor:'var(--blue600)', borderRadius:'10px'}}>
                <img src={Skipass1} className="service-image" />
                <div className="service-title">
                    Услуги подъемника
                </div>
            </div>
            <div className="service-details">
                <p> Для детей и взрослых</p>
                <p> С 8:00 до 21:00</p>
                <p> Залог включен в стоимость</p>
            </div>
            <a href="/order" className="button order-button" style={{textAlign:'center'}}>Заказать</a>
      
            <div className="how-it-works"style={{zIndex:'5'}}>
                <h2>Как это работает?</h2>
                <p className='left-align'><strong>1. Выбор дат:<br /></strong> После нажатия кнопки "Заказать" мы указываем даты, в которые собираемся использовать skipass. Для многодневных ski-pass-ов мы выбираем диапазон дат.</p>
                <p className='left-align'><strong>2. Предоставление информации:<br /></strong> В процессе покупки мы предоставляем такую информацию, как имя, фамилия, адрес электронной почты.</p>
                <p className='left-align'><strong>3. Оплата:<br /></strong> Горнолыжный курорт предлагает способы оплаты включающие банковские переводы или электронные платежные системы.</p>
                <p className='left-align'><strong>4. Подтверждение и получение skipass:<br /></strong> После оплаты мы получаем подтверждение на email в виде электронного письма или ваучер. Предъявите подтверждение или ваучер в пункте проката на Склоне, где вам получат skipass.</p>
            </div>

            <div className='content-list__item' style={{backgroundColor:'var(--blue600)', borderRadius:'10px'}}>
                <img src={Skipass2} className="Large-img" style={{zIndex:'5', padding:'20px'}}/>
            </div>


             <a href="./abouttheresort" className="button view-button-green-skipass" style={{zIndex:'5'}}>Откройте для себя</a> 
            </div>
            
        </div>
    );
};

export default skipass;
