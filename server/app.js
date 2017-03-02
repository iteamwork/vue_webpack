/**
 * Created by Administrator on 2017/2/28.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/User');
var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    //res.header("X-Powered-By",' 3.2.1')
    //res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/Login',routes.login);


var server = app.listen(9999, function (err) {
    if(err){
        console.log(err);
    }
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening is start....');
})

module.exports = app;
