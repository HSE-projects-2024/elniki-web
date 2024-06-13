
import './Home.css'; // Подключаем файл со стилями

import ski2 from './../img/ski2.jpg';
const Developedoffer = () => {

    return (
		<main className="section">
                <div className="container">
				<ul className="content-list">
				<li className="content-list__item">
                <h1 className="title-1">Услуги</h1>
                        </li>

                    <ul className="content-list2">
                        {/* Большая картинка слева */}
                        <li className="content-list__image">
                            <img src={ski2} alt="Large Image" />
                        </li>
						<ul className="content-list">
                        {/* Первый элемент списка */}
                        <li className="content-list__item">
                        <h1 className="custom-title">SKIPASS</h1>
                        </li>

						</ul>
                    </ul>
                    <li className="content-list__item">
                            <p>SKIPASS на спуск, дневной SKIPASS, сезонный SKIPASS? Неважно, сколько дней вы планируете кататься на борде или лыжах, у нас есть то, что вам нужно! Загляните к нам, и вы получите доступ к бесконечному веселью на наших склонах в течение всего сезона!</p>
                            <a href="./services.html" className="btn2">Смотреть</a>
                        </li>
					</ul>
                </div>
            </main>
	);
}

export default Developedoffer;