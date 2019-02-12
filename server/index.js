const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const PORT = 3000;

//logging middleware
app.use(morgan('dev'))

//static serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

//parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//plug in API routes here
app.use('/api', require('./apiRoutes'))

app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,'..','public'))
})
