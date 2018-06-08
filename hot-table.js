//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express set up
var app = express();
var PORT = process.env.PORT || 3000; 

//body parser set up
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//variables
var reservations = [];

//paths
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/res", function(req, res) {
    res.sendFile(path.join(__dirname, "res.html"));
  });
  
  app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

//handle get requests from table.html
app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

//handle post request from res.html
app.post("/api/reservation", function(req, res) {
    var newReservation = req.body;
    reservations.push(newReservation);
    res.json(newReservation);

});

//listen for requests
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  