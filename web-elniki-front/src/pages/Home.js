import Header from './../components/header/Header';
import './Home.css'; // Подключаем файл со стилями
import ski from './../img/ski.jpg';
import skier from './../img/skier.svg';
import image32 from './../img/image 32.svg';
import image33 from './../img/image 33.svg';
import SkiResort from './SkiResort';
import Table from './Table';
const Home = () => {
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
				    <ul className="vertical-list">
                        <li className="content-list__item">      
                                <p>Красивые пейзажи и природные виды? Пикники у костра? 
                                А может быть, катание на горных лыжах и сноубордах?</p>
                        </li>
                        <ul className="horizontal-list">
                            <li className="content-list__image">
                                <img src={ski} alt="Large Image" />
                            </li>
                            <ul className="vertical-list">
                                <li className="content-list__item">
                                    <p className="left-align"><span className="bold-text">Кресельный подъемник</span>
                                    <br />Первый на горнолыжном курорте в Пермском крае <span className="bold-text"> 
                                    <br />18 отличных трасс</span>
                                    <br />Трассы для любых уровней подготовки</p>
                                </li>
                            </ul>
                        </ul>
                        <ul className="horizontal-list">       
                            <ul className="vertical-list">
                                <ul className="horizontal-list">
                                    <img src={image32} className="foreground-image2" />
                                <li className="content-list__item">
                                    <p className="left-align"><span className="bold-text">310 метров</span>
                                    <br />Максимальный перепад высот на трассах </p>
                                </li></ul>
                                <ul className="horizontal-list">
                                    <img src={image33}  className="foreground-image3"/>
                                <li className="content-list__item">
                                <p className="left-align"><span className="bold-text">Современный сноупарк</span>
                                <br />Широкий современный сноупарк <br />международного уровня</p>
                                </li></ul>
                                </ul>
                                <li className="content-list__image">
                                <img src={skier} alt="Large Image" />
                            </li>
                            </ul>
                            
                    </ul>				
                </div>
            </main>
            <SkiResort />
            <Table />
        </>
    );
}

export default Home;
