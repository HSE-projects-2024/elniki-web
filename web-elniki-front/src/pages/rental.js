import './Rental.css'; 

import Food1 from './../img/food/1.jpg';
import Food2 from './../img/food/2.jpg';
import Food3 from './../img/food/3.png';
import Food4 from './../img/food/4.jpg';
import Food5 from './../img/food/5.jpg';

const Rental = () => {
    return (
        <div className="food-container">
            <div className="last-container-food">
                <ul className="vertical-list width " style = {{gap:'80px'}}>
                    <img src={Food1} className="Large-img" />
                    <h1 className="title-1 left-align" >Прокат оборудования</h1>
                    <p className="title-2 left-align">
                    Открыто: 7:30–21:30</p>
                  
                    <ul className='horizontal-list'>

                        <ui className='vertical-list'>
                        <p className="title-2" style={{ color: 'var(--pink600)' }}><strong>Новинка!</strong></p>
                        <p className="title-2" style={{ color: 'var(--pink600)' }}><strong>Сноутюбинг</strong></p>
                        <p className="left-align">
                        Не хотите кататься на лыжах? Не беда! Наслаждайтесь катанием на сноутюбинге по снегу!</p>
                        </ui>
                        <img src={Food2} className="Large-img" />
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        Маринованная свиная шея, булочка бриошь, салат айсберг, красный лук, огурцы ким-чи,томаты, пряный майонез и медово-кунжутный соус.</p>
                    </li>
                   
                    <ul className='horizontal-list'>
                        <img src={Food3} className="Large-img" />
                        <p className="title-2" style={{ color: 'var(--pink600)' }}><strong>Мистер Биг</strong></p>
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        Котлета из мраморной говядины, хашбраун, бекон, яйцо, томаты, салат айсберг, соус пряный майонез и горчичный.</p>
                    </li>
                   
                    <ul className='horizontal-list'>
                        <p className="title-2" style={{ color: 'var(--pink600)' }}><strong>Бургер BBQ с копченым сулугуни</strong></p>
                        <img src={Food4} className="Large-img" />
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        Котлета мраморная говядина, копченый сулугуни, булочка бриошь, салат айсберг, томаты, огурцы ким-чи, красный лук, лук фри, соус тар тар , соус BBQ.</p>
                    </li>
                    
                    <ul className='horizontal-list'>
                        <img src={Food5} className="Large-img" />
                        <p className="title-2" style={{ color: 'var(--pink600)' }}><strong>Трюфельный чизбургер</strong></p>
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        Котлета мраморная говядина,двойной сыр чеддер, булочка бриошь, салат айсберг, томаты, огурцы ким-чи,трюфельный майонез, соус тар-тар.</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Rental;