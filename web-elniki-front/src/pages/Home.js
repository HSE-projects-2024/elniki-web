import Header from './../components/header/Header';
import './Home.css'; // Подключаем файл со стилями
import ski from './../img/ski.jpg';
const Home = () => {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
				<ul className="content-list">
				<li className="content-list__item">
                            
                            <p>Красивые пейзажи и природные виды? Пикники у костра? 
							А может быть, катание на горных лыжах и сноубордах?</p>
                        </li>

                    <ul className="content-list2">
                        {/* Большая картинка слева */}
                        <li className="content-list__image">
                            <img src={ski} alt="Large Image" />
                        </li>
						<ul className="content-list">
                        {/* Первый элемент списка */}
                        <li className="content-list__item">
                            <h2 className="title-2">Кресельный подъемник</h2>
                            <p>Первый на горнолыжном курорте в Пермском крае</p>
                        </li>

                        {/* Второй элемент списка */}
                        <li className="content-list__item">
                            <h2 className="title-2">18 отличных трасс</h2>
                            <p>Трассы для любых уровней подготовки</p>
                        </li>
						</ul>
                    </ul>
					</ul>
                </div>
            </main>
        </>
    );
}

export default Home;
