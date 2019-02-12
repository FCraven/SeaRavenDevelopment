const express = require('express');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const port = process.env.PORT || 3000;

//logging middleware
app.use(morgan('dev'))

//static serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

//parsing middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//plug in API routes here
app.use('/api', require('./apiRoutes'))

//send the Index.html if request doesn't match the api routes
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname,'..','public'))
})

//500 Error Handler - error catching endware
//Create and send a Fail Whale!!
app.use(function(err,req,res,next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

app.listen(port, function () {
  console.log(`The server is listening for requests on localhost://${port}`)
})
