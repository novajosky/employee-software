var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require("method-override");

//load "secrets" in the .env file
require('dotenv').config();
//connect to the mongodb database
require('./config/database');
//config passport
require('./config/passport');

var indexRouter = require('./routes/index');
var employeesRouter = require('./routes/employees');
var commentsRouter = require('./routes/comments');
var softwaresRouter = require('./routes/softwares');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Add this middleware BELOW passport middleware
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

const isLoggedIn = require('./config/auth');

app.use('/', indexRouter);
app.use('/employees', isLoggedIn, employeesRouter);
app.use('/softwares', isLoggedIn, softwaresRouter);
app.use('/', isLoggedIn, commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
