// modules ==========================================================================
var express = require('express');
var app = express();
var logger = require('morgan');

var PORT = process.env.PORT || 3000;
// middleware =======================================================================
app.use(express.static(__dirname + "/public"));

// routes ===========================================================================

require('./app/routes')(app); //pass our application into our routes

app.listen(PORT, function(){
  console.log("Listening on PORT " + PORT);
}); //start server and console log on connection

exports = module.exports = app; // expose our app
