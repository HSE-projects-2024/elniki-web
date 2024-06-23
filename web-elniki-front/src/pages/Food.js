import './Food.css'; 

import Food1 from './../img/food/1.jpg';
import Food2 from './../img/food/2.jpg';
import Food3 from './../img/food/3.png';
import Food4 from './../img/food/4.jpg';
import Food5 from './../img/food/5.jpg';

const Food = () => {
    return (
        <div className="food-container">
            <div className="last-container-food">
                <ul className="vertical-list width " style = {{gap:'80px'}}>
                    <h1 className="title-1 left-align" >Еда</h1>
                    <ul className='horizontal-list'>
                        <img src={Food1} className="Large-img" />
                        <p className="title-2" style={{ color: 'var(--pink600)' }}><strong>Бургер Классика</strong></p> 
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        Котлета мраморная говядина, сыр чеддер, булочка бриошь, салат айсберг, томаты, огурцы ким-чи, красный лук, пряный майонез, домашний кетчуп.</p>
                    </li>
                  
                    <ul className='horizontal-list'>
                        <p className="title-2" style={{ color: 'var(--pink600)' }}><strong>Бургер Шашлык</strong></p>
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

export default Food;