import './Developedoffer.css'; 

import Developedoffer2 from './../img/developOffer/skiingpass.jpg';
import Developedoffer3 from './../img/developOffer/ski_rent.jpg';
import Developedoffer4 from './../img/developOffer/image 18.jpg';
import Developedoffer5 from './../img/developOffer/jesuisromyx 1.png';
import Developedoffer6 from './../img/developOffer/image 25.png';
import Developedoffer7 from './../img/developOffer/podroz.png';

const Developedoffer = () => {
    return (
        <div className="developedoffer-container">
            <div className="background-block Orange-block1"></div>
            <div className="background-block Orange-block2"></div>
            <div className="background-block Orange-block3"></div>
            <div className="background-block Orange-block4"></div>
            <div className="background-block Orange-block5"></div>
            <div className="background-block BR-block"></div>
            <div className="last-container-developedoffer">
                <ul className="vertical-list width " style = {{gap:'80px'}}>
                    <h1 className="title-1 left-align" >Услуги</h1>
                    <ul className='horizontal-list'>
                        <img src={Developedoffer2} className="Large-img" />
                        <p className="title-2" style={{ color: 'var(--white)' }}><strong>SKIPASS</strong></p> 
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                            <strong>SKIPASS</strong> на спуск, дневной <strong>SKIPASS</strong>, сезонный <strong>SKIPASS</strong> ?<br />
                            Неважно, сколько дней вы планируете кататься на борде или лыжах, у нас есть то, что вам нужно!
                            Загляните к нам, и вы получите доступ к бесконечному веселью на наших склонах в течение <span className="colored-text">всего сезона</span>!
                        </p>
                    </li>
                    <a href="./skipass" className="button view-button">Смотреть</a>
                    
                    <ul className='horizontal-list'>
                        <p className="title-2" style={{ color: 'var(--white)' }}><strong>Трассы</strong></p>
                        <img src={Developedoffer3} className="Large-img" />
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        Мы предлагаем три различных лыжных маршрута, чтобы подарить вам <span className="colored-text">незабываемые</span> впечатления от катания на склонах. Независимо от вашего уровня квалификации, у нас есть что-то, что вам подойдет.
                        </p>
                    </li>
                    <a href="./SkiSlopes" className="button view-button">Смотреть</a>
                    
                    <ul className='horizontal-list'>
                        <img src={Developedoffer4} className="Large-img" />
                        <p className="title-2" style={{ color: 'var(--black)' }}><strong>Горные тропы</strong></p>
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        Приготовьтесь к незабываемым приключениям и захватывающим видам. Горные тропы в этом районе <span className="colored-text">идеально подходят для путешествий</span>, особенно для любителей природы. Выберите маршрут, соответствующий вашему уровню подготовки, и отправляйтесь покорять горы!
                        </p>
                    </li>
                    <a href="./SkiSlopes" className="button view-button">Смотреть</a>
                    
                    <ul className='horizontal-list'>
                        <p className="title-2" style={{ color: 'var(--white)' }}><strong>Прокат</strong></p>
                        <img src={Developedoffer5} className="Large-img" />
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        В нашем прокате вас ждут новенькие доски и лыжи. Наши сотрудники будут рады помочь вам выбрать <span className="colored-text">идеальное снаряжение</span>, которое обеспечит вам комфорт и уверенность на склоне. Приходите к нам и вооружитесь идеальным оборудованием!
                        </p>
                    </li>
                    <a href="./rental" className="button view-button">Смотреть</a>
                    
                    <ul className='horizontal-list'>
                        <img src={Developedoffer6} className="Large-img" />
                        <p className="title-2" style={{ color: 'var(--white)' }}><strong>Еда</strong></p>
                    </ul>
                    <li className="content-list__item">
                        <p className="left-align">
                        После целого дня волнений приглашаем вас в наше уютное место, где вы сможете <span className="colored-text">расслабиться и насладиться</span> неповторимой едой. В нашем меню представлены вкусные блюда региональной и интернациональной кухни, приготовленные из свежих местных продуктов.
                        </p>
                    </li>
                    <a href="./food" className="button view-button">Смотреть</a>
                </ul>
            </div>
            <div className="last-container-developedoffer2">
            <ul className='vertical-list'style = {{gap:'50px'}}>
                        <p className="title-2" style={{ color: 'var(--white)' }}><strong>Давайте узнаем друг друга!</strong></p>
                        <ui className='horizontal-list'>
                        <img src={Developedoffer7} className="Large-img" />
                        <a href="./contact" className="button view-button-green">Контакты</a>
                        </ui>
                    </ul>

            </div>
        </div>
    );
}

export default Developedoffer;