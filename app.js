
const express = require('express');
const app = express();
const process = require('process');
require('dotenv').config();
const path = require('path')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const reloginCookie = require('./src/middlewares/reloginCookie')

const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET || 'secreto'

const indexRouter = require('./src/routes/indexRouter');
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));
app.use(cookieParser());
app.use(reloginCookie)

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use('/', indexRouter);

app.listen(PORT, ()=>{
    console.log(`Puerto abierto en ${PORT}`)
})