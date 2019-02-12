const express = require('express');
const app = express();
const path = require('path')
const morgan = require('morgan')
const PORT = 3000;

//logging middleware
app.use(morgan('dev'))

//static serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

