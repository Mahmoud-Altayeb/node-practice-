const express = require('express');
const router = express.Router();


router.get('/',(req, res, next) => {
    console.log('In the another middleware');
    res.send('<h1>test</h1>');
});

module.exports = router;