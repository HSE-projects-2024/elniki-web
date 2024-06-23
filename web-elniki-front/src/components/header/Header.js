import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Добро пожаловать в Ельники
					</strong>
				</h1>
				<div className="header__text">
					<p>Лучшие истории начинаются здесь</p>
				</div>
				<a href="./services" className="button header-button">
					Услуги
				</a>
			</div>
		</header>
	);
}

export default Header;