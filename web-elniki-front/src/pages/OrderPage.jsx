import Calendar from '../components/Calendar';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const OrderPage = () => {
    const [date, setDate] = useState(null);

    const handleDateChange = date => {
        setDate(date);
    };

    const [selectedType, setSelectedType] = useState('');
      
    const handleTypeChange = (e) => {
          setSelectedType(e.target.value);
    };

    return (
        <div>
            <h1>Заказ ски-пасса</h1>
            <form onSubmit={e => e.preventDefault()} className="custom-class">
                <label>
                <div className="title">Тип ски-пасса</div>
                <select id="typeSelect" value={selectedType} onChange={handleTypeChange} className="text-in-box">
                    <option value="">Однодневный ски-пасс для взрослых</option>
                    <option value="type1">Type 1</option>
                    <option value="type2">Type 2</option>
                    <option value="type3">Type 3</option>
                </select>
                {selectedType && <p>Selected type: {selectedType}</p>}
                </label>
                <label> 
                <div className="title">Количество</div>
                    <input type="text" placeholder="1" className="text-in-box" />
                </label>
                <label>
                <div className="title">Выберите дату</div>
                    <div>
                        {date && <p className='date'>Выбранная дата: {date.toLocaleDateString()}</p>}
                        <Calendar onChange={handleDateChange} />
                    </div>
                </label>
                <label>
                <NavLink to="/buy">
                    <button className='submit'>Заказ</button>
                </NavLink>
                </label>
                <label>
                    <div className='info'>
                    <p>Билетная касса горнолыжного склона:</p>
                    <p>Открыта круглый год</p>
                    <p>Пн–Вс: 7:30–21:30</p>
                    </div>
                </label>
            </form>
        </div>
    );
}
