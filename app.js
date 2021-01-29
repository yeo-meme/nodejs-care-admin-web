var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signUpRouter = require('./routes/signup');
var logInRouter = require('./routes/login');
var adminBoardRouter = require('./routes/adminboard');
var resultHomeRouter = require('./routes/resulthome');
var detailBoardRouter = require('./routes/detail_board');
var sendNumberRouter = require('./routes/sendNumberPage');
var deliveryPageRouter = require('./routes/delivery-page');
var pageCountRouter = require('./routes/pageCount');
var orderNumberRouter = require('./routes/orderNumberadd');
var deliveryCompleteRouter = require('./routes/delivery-finish');


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'css')));

//page route
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signUpRouter);
app.use('/login', logInRouter);
app.use('/adminboard', adminBoardRouter);
app.use('/resulthome',resultHomeRouter);
app.use('/detail_board',detailBoardRouter);
app.use('/sendNumberPage',sendNumberRouter);
app.use('/delivery-page', deliveryPageRouter);
app.use('/pageCount', pageCountRouter);
app.use('/orderNumberadd', orderNumberRouter);
app.use('/delivery-finish', deliveryCompleteRouter);



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
