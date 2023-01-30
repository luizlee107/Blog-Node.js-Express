const express = require('express');
const app = require('./app');

require('dotenv').config();

const PORT = process.env.PORT || 5002;

app.listen(PORT,() => console.log('Server running port '+ PORT));