import React from 'react';
import './ski.css';
import skier from './../img/skierw.svg'; // замените на ваше изображение

const SkiResort = () => {
    return (
        <div className="resort-container">
            <div className="background-block blue-block"></div>
            <div className="background-block white-block"></div>
            <div className="background-block red-block"></div>
            <div className="image-container">
                <img src={skier} alt="Skier" className="skier-image" />
            </div>
            <a href="/abouttheresort" className="resort-button">О курорте</a>
            <div className="background-block blue-block2"></div>
        </div>
        
    );
};

export default SkiResort;
