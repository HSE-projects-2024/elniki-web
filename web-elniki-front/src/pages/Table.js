import React from 'react';
import './Table.css';
import Kasina from './../img/Kasina.svg';
import pobrane from './../img/pobrane.svg';

import OnlyTable from './OnlyTable';
import Map from './Map';

const Table = () => {
    return (
        <div>

            {/* Список контента */}
            <div className='vertical-list' style={{gap:'30px'}}>
                <OnlyTable />
                <img src={Kasina} className="Large-img" alt="Kasina" />
                <a href="/skipass" className="button skipass-button">Скипассы</a>
                <div className='content-list__item' >
                    <Map />
                </div>
                <a href="/contact" className="button contacttt-button">Контакты</a>
                <p className="title-2"><strong>Присоединяйтесь к нам!</strong></p>
                <div className='content-list__item'>
                    <img src={pobrane} className="Large-img" alt="Join us" />
                </div>
            </div>
        </div>
    );
};

export default Table;

