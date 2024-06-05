import './RegPage.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RegPage = () => {
    return (
        <div>
            <div className='reg-head'>
                <h1>Регистрация</h1>
            </div>
            <div className='reg-main'>
                <p>Уже есть аккаунт? <a href=''>Войти</a></p>
                <Form>
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" />
                </Form>
                <Form>
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" />
                </Form>
                <Form>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form>
                <Form>
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" />
                </Form>
                <Form>
                    <Form.Label>Подтвердите пароль</Form.Label>
                    <Form.Control type="password" />
                </Form>
            </div>
            <div className='text-center'>
                <Button variant="dark" size="lg">Зарегистрироваться</Button>
            </div>
        </div>
    );
}

export default RegPage;
