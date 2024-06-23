import React from 'react';
import './Table.css';

const Map = () => {

    return (
        <div className='map-container'>
            <ul className="vertical-list">
                <p style={{ color: 'var(--white)', fontSize: 'var(--xlarge)', padding: '50px' }}><span className="bold-text">Адрес</span>
                    <br />Деревня Ельники, 1 <br />Добрянский городской округ, <br />Пермский край, 618719</p>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2103.2188477127124!2d56.505337778016866!3d58.18714127408153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43e8d12555555555%3A0x8cf87acd5a20e717!2sYel&#39;niki%2C%20Gornolyzhnaya%20Baza!5e0!3m2!1sen!2sru!4v1718486517147!5m2!1sen!2sru"
                    width="600px"
                    height="600px"
                    style={{ border: '5px solid var(--Green400)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </ul>
        </div>
    );
};

export default Map;