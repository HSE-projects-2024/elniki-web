import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Добро пожаловать в  <em>Ельники</em>
					</strong>
				</h1>
				<div className="header__text">
					<p>Лучшие истории начинаются здесь</p>
				</div>
				<a href="./services" className="btn">
					Услуги
				</a>
			</div>
		</header>
	);
}

export default Header;