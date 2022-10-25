const express = require('express');
const path = require('path');
const createError = require('http-errors');

const homeRouter = require('./src/routers/home');
const aboutRouter = require('./src/routers/about');
const projectsRouter = require('./src/routers/projects');
const qualificationRouter = require('./src/routers/qualification');

const app = express();

app.set('view', path.join(__dirname, './src/view'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', homeRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/qualification', qualificationRouter);


app.use(function(req, res, next){
    next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;