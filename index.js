var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;

//boilerplate for app.use
//sets up the Express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
