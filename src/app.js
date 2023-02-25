const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = exphbs.create({});
const router = require('../routes/router');
const bodyParser = require('body-parser');
const app = express();
const cookie = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;



app.use('/js',express.static(__dirname + './public/js'));
app.use('/css',express.static(__dirname + './public/css'));

app.use(cookie());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie: { secure: true}
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(router); 

app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('views','./views');

module.exports = app;