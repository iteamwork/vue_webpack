/**
 * Created by Administrator on 2017/2/28.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var user = require('./routes/User');
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

app.post('/Login',user.login);//登录
app.post('/Register',user.register);//注册

app.post('/getUsers',user.getUsers); //获取列表

app.get('/getBanner',user.getBanner); //获取banner

app.post('/UpdatePwd',user.updatePwd); //更新密码

app.get('/getMoviesByCity',user.getMoviesByCity); //获取电影列表

app.get('/getMoviesById',user.getMoviesById); //获取电影详情

app.get('/getMoviesByDetailStr/:detailStr',user.getMoviesByDetailStr); //获取电影的信息

app.get('/getMoviesByEvaluation/:detailStr',user.getMoviesByEvaluation); //获取电影的评论

app.get('/getComingMovies',user.getComingMovies); //获取即将上映的电影

app.post('/updateUserInfo',user.updateUserInfo); //更新用户信息



var server = app.listen(9999, function (err) {
    if(err){
        console.log(err);
    }
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening is start....');
})

module.exports = app;
