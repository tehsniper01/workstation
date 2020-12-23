//required node modules
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//debugging modules
const chalk = require('chalk');
const debug = require('debug')('app');

//telling node to use express
const app = express();

//pulling in the require for the todoList
const todoController = require('./controllers/todoController');

//morgan setup, for debugging
app.use(morgan('tiny'));

// telling express we will be using static routing
app.use(express.static(path.join(__dirname, '/public/')));

// telling express if the files are not in public,
// it can go look in node_modules
// This is for bootstrap
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
//this is for jquery
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

//rendering engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//firing function for todolist
todoController(app);

// rendering the home page
app.get('/', (req, res) => {
    res.render('index')
});

// rendering the HPI Checklist
app.get('/hpichecklist', (req, res) => {
    res.render('hpichecklist')
});

// rendering the AX Checklist
app.get('/axchecklist', (req, res) => {
    res.render('axchecklist')
});

//rendering the overnight batch checklist
app.get('/batch', (req, res) => {
    res.render('batch')
});

//rendering the DC check checklist
app.get('/dccheck', (req, res) => {
    res.render('dccheck')
});

//rendering the AX Deploy checklist
app.get('/axdeploys', (req, res) => {
    res.render('axdeploys')
});

//rendering the AX Deploy checklist
app.get('/todo', (req, res) => {
    res.render('todo')
});

//tells the app to listen on port 3000
app.listen(3000, () => {
    debug(`listening on port ${chalk.green('3000')}`);
}); 