import React, { useEffect, useState }  from 'react';
import './Table.css';
import axios from 'axios';
const OnlyTable = () => {

    const [skipassTypes, setSkipassTypes] = useState([]);

    useEffect(() => {
        const fetchSkipassTypes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/getSkipasses');
                setSkipassTypes(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchSkipassTypes();
    }, []);

    return (
        <div className="table-container">
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col">Тип скипасса</th>
                            <th scope="col">Тариф "Взрослый"</th>
                            <th scope="col">Тариф "Детский"</th>
                            <th scope="col">Описание</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Стоимость карты</td>
                            <td colSpan="2">300 руб.</td>
                            <td>Карта обеспечивает доступ к основным подъемникам на территории курорта</td>
                        </tr>
                        {skipassTypes.map(skipass => (
                            <tr key={skipass.SkiPassID}>
                                <td>{skipass.skiPassType}</td>
                                <td>{skipass.Price}</td>
                                <td>{skipass.ChildPrice}</td>
                                <td>{skipass.Description}</td>
                            </tr>
                        ))}
                        <tr>
                            <td>VIP-подъемник на 1 день </td>
                            <td colSpan="2">15000 руб.</td>
                            <td>Подъемник высокого уровня сервиса с индивидуальным обслуживанием и комфортными условиями </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
    );
};

export default OnlyTable;
