import acc from "./../../img/icons/Account.png"
import "./style.css";
import {Link} from 'react-router-dom';


const Navbar = () => {
	return ( <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./" className="logo"><strong>BESKID TIME</strong> ЕЛЬНИКИ</a>

                <ul className="nav-list">
                    <li className="nav-list__item"><a href="./" className="nav-list__link nav-list__link--active">Домашняя страница</a></li>
                    <li className="nav-list__item"><a href="./services.html" className="nav-list__link">Услуги</a></li>
                    <li className="nav-list__item"><a href="./accommodation.html" className="nav-list__link">Проживание</a></li>
					<li className="nav-list__item"><a href="./abouttheresort.html" className="nav-list__link">О курорте</a></li>
                    <li className="nav-list__item"><a href="./order" className="nav-list__link">Заказ ски-пасса</a></li>
                    <Link to="./login" className="account-icon">
                        <img src={acc} alt="example"/>
                    </Link>
                </ul>
            </div>
        </div>
    </nav> );
}
export default Navbar;
