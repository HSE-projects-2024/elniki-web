
import './Developedoffer.css'; // Подключаем файл со стилями

import ski2 from './../img/skiingpass.jpg';


const Developedoffer = () => {
    return (
        <main className="section">
            <div className="container">
                <ul className="vertical-list">
                    <li className="content-list__item">
                        <h1 className="title-1 left-align width">Услуги</h1>
                    </li>
                    <ul className="horizontal-list">
                        <li className="content-list__image">
                            <div className="multi-layered-block">
                                <img src={ski2} alt="Layer 2" className="layer layer2" />
                                
                                <div className="text-overlay">SKIPASS</div>
                            </div>
                        </li>
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align width">
                            <strong>SKIPASS</strong> на спуск, дневной <strong>SKIPASS</strong>, сезонный <strong>SKIPASS</strong> ?<br />
                            Неважно, сколько дней вы планируете кататься на борде или лыжах, у нас есть то, что вам нужно!
                            Загляните к нам, и вы получите доступ к <span className="bold-colored-text">бесконечному веселью</span> на наших склонах в течение <span className="colored-text">всего сезона</span>!
                        </p>      
                    </li>
                    <a href="./services" className="button ">Смотреть</a>
                </ul>
            </div>
        </main>
    );
}

export default Developedoffer;