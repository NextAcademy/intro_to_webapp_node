const express = require("express");
var bodyParser = require("body-parser");

const app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/calculator", function(req, res) {
  res.render("index", {
    first_number: null,
    second_number: null,
    result: null
  });
});

app.post("/calculator", function(req, res) {
  const result = 2;

  res.render("index", {
    first_number: req.body.first_num,
    second_number: req.body.second_num,
    result: result
  });
});

app.listen(3000, () => console.log("App listening on port 3000!"));
