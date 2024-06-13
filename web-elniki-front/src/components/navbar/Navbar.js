import acc from "./../../img/icons/Account.png"
import "./style.css";
const Navbar = () => {
	return ( <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>BESKID TIME</strong> ЕЛЬНИКИ</a>

                <ul className="nav-list">
                    <li className="nav-list__item"><a href="./" className="nav-list__link nav-list__link--active">Домашняя страница</a></li>
                    <li className="nav-list__item"><a href="./services.html" className="nav-list__link">Услуги</a></li>
                    <li className="nav-list__item"><a href="./accommodation.html" className="nav-list__link">Проживание</a></li>
					<li className="nav-list__item"><a href="./abouttheresort.html" className="nav-list__link">О курорте</a></li>
					<li className="account-icon"><a href="./account.html"><img src={acc} alt="Link"/></a></li>
                </ul>
            </div>
        </div>
    </nav> );
}
export default Navbar;
