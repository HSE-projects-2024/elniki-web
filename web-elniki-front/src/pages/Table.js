import React from 'react';
import './Table.css';
import Kasina from './../img/Kasina.svg';
import pobrane from './../img/pobrane.svg';
import OnlyTable from './OnlyTable.js';
import Map from './Map.js';

const Table = () => {

    return (
        <div className="resort-container2">

            <div className="background-block white-block2"></div>
            <div className="background-block Brownish-block"></div>
            <div className="image-Kasina-container">
                <img src={Kasina} className="Large-img" />
            </div>
            <OnlyTable />
            <div className="resort-container2">
                <Map />
            </div>

            <a href="/skipass" className="button skipass-button">Скипассы</a>
            <a href="/contact" className="button contacttt-button">Контакты</a>
            <div className="background-block white-block22"></div>
            <div className="background-block green-block"></div>
            <div className="last-container">
                <ul className="vertical-list" style={{ gap: '240px' }}>
                    <p className="title-2"><strong>Присоединяйтесь к нам!</strong></p>
                    <img src={pobrane} className="Large-img" />
                </ul>
            </div>
        </div>
    );
};

export default Table;
