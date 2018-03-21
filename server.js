
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var presents     = require('./app/models/presents');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);
app.use('/api/presents', presents);

app.use(function(err, req, res, next) {
  res.json({ message: 'helaas, dit is geen valide endpoint' });   
});

app.listen(port);
console.log('Magic happens on port ' + port);