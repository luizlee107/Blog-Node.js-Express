const express = require('express');
const app = require('../src/app');
const render = require('../src/app');
const router = express.Router();


router.get('/', (req,res) => {
    return res.render('../views/home');
});






module.exports = router;