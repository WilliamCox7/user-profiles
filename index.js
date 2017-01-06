var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config.js')
var cors = require('cors');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');
var port = 3000;

var app = express();

var corsOptions = {
    origin: 'http://localhost:' + port
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.pushProfiles);
app.put('/api/user', userCtrl.updateName);
app.put('/api/pass', userCtrl.updatePass);


app.listen(port, function() {
    console.log("port " + port + " listening...");
});
