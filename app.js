const express = require('express');
const app = express();

app.use('/add-product',(req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>test products</h1>');
});

app.use('/',(req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>test</h1>');
});

app.listen(300);