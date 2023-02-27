const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({});
const router = require('../routes/router');
const bodyParser = require('body-parser');
const app = express();
const cookie = require('cookie-parser');
const session = require('express-session');




app.use('/js',express.static(__dirname + './public/js'));
app.use('/css',express.static(__dirname + './public/css'));

app.use(cookie());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.json());

app.use(router); 

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('views','./views');

module.exports = app;