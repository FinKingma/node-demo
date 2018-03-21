
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
let port = 3000;

let presents = require('./app/routes/presents');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/json'}));

app.get("/", (req, res) => res.json({message: "Welkom op mijn prachtige api!"}));

app.route("/api/presents")
    .get(presents.getPresent)

app.get("/*", (req, res) => res.json({message: "Helaas, dit is geen valide endpoint"}));

app.listen(port);
console.log('listening on ' + port);

module.exports = app;