import React, { useState, useEffect } from 'react';
import axios from 'axios';
import skiPassImage from '../../img/skipass.png'; 
import './information.css';

const SkiPassPage = ({ userId }) => {
    const [skiPasses, setSkiPasses] = useState([]);

     // Функция для форматирования даты
     const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    };

  
    useEffect(() => {
        axios.get(`http://localhost:5000/api/skiPasses?userId=${userId}`)
          .then(response => {
            setSkiPasses(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, [userId]);
  
      return (
        <body className="body-page1">
            <div>
            <h1 className='inform-ski-head'>Мои скипассы</h1>
            <div className='ski-pass-container'>
                {skiPasses.map(skiPass => (
                <div key={skiPass.SkiPassID} className='ski-pass-card'>
                    <img src={skiPassImage} alt="ski pass" />
                    <p><em>Тип скипасса: </em> {skiPass.skiPassType}</p>
                    <p><em>Количество:</em> {skiPass.number_of_skipasses}</p>
                    <p><em>Дата покупки:</em> {formatDate(skiPass.PurchaseDate)}</p>
                    <p><em>Дата начала:</em> {formatDate(skiPass.StartDate)}</p>
                    <p><em>Дата конца:</em> {formatDate(skiPass.EndDate)}</p>
                    <p><em>Статус:</em> Оплачено ✓</p>
                </div>
                ))}
            </div>
            </div>
        </body>
      );
  };

export default SkiPassPage;
