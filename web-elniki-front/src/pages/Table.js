import React from 'react';
import './Table.css';
import Kasina from './../img/Kasina.svg'; // замените на ваше изображение

const Table = () => {
    return (
        <div className="resort-container2">
            
            <div className="background-block2 white-block2"></div>
            <div className="background-block2 red-block2"></div>
            <div className="image-container2">
                <img src={Kasina} alt="Skier" className="skier-image2" />
            </div>
            <button className="resort-button2">Скипассы</button>
            <div className="background-block2 white-block22"></div>
        </div>
    );
};

export default Table;
