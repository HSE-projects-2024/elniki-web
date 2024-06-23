const express = require('express');
const app = express();
const userRouter = require('./routes/user');
const skiPassRouter = require('./routes/skipassTypes')
const purchaseRouter = require('./routes/purchase')
const userSkipasses = require('./routes/informationAboutScipasses')
const payment = require('./routes/payment')
const price = require('./routes/skipassPrice')
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', userRouter);
app.use('/', skiPassRouter);
app.use('/', purchaseRouter);
app.use('/', userSkipasses);
app.use('/', payment);
app.use('/', price);


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

