const YooKassa = require('yookassa'); // Подключаем библиотеку Юкассы
const express = require('express');
const router = express.Router();

// Инициализация Юкассы с тестовыми данными
const yooKassa = new YooKassa({
    shopId: '403962',
    secretKey: 'test_2_E6zapJ9k-ZkstQvccunms-yJUDS2CK1k8uFld27v4',
});

// Payment endpoint
router.post('/api/payment', async (req, res) => {
    const { skiPassPrice } = req.body;

    try {
        const payment = await yooKassa.createPayment({
            amount: {
                value: String(skiPassPrice),
                currency: 'RUB',
            },
            confirmation: {
                type: 'redirect',
                return_url: 'http://localhost:3000/myskipass',
            },
            description: 'Payment on the site',
        });

        res.json({ payment });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).json({ error: 'Error creating payment' });
    }
});

module.exports = router;
