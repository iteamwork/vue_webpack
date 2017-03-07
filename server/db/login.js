/**
 * login logic
 */

var dbConn = require('./dbconfig'); //引入数据库的配置
var crypto = require('crypto'); //引入crypto,作用是加密

/**
 *把密码用sha1加密后,存入数据库
 */
function getSha(val){
    var sha= crypto.createHash('sha1').update(val);
    return sha.digest('hex');
}

/**
 *
 * @param obj -->user 对象
 * @param callback -->数据查询完成后的回调函数
 */
function login(obj,callback){
    var sql ='';
    //0:表示手机号登录，1:用户名登录
    if(obj.type == 0)
      sql = 'select * from users where mobile="'+obj.mobile+'" and password = "'+getSha(obj.password)+'"';
    else
      sql = 'select * from users where username="'+obj.username+'" and password = "'+getSha(obj.password)+'"';
    dbConn.conn().query(sql, function (err, result) {
        if(err){
            console.log("login error at "+ err);
        }
        callback(result);
    })
};

function register(obj,callback){
    console.log(JSON.stringify(obj));
    var sql = 'insert into users(username,password,mobile) VALUES (?,?,?)';
    dbConn.conn().query(sql,[obj.username,getSha(obj.password),obj.mobile], function (err, result) {
        if(err){
            console.log('register err at '+ err);
        }
        callback(result);
    })
};

function isExistUser(obj,callback){
    var sql ='select * from users where mobile=?';
    dbConn.conn().query(sql,[obj.mobile], function (err, result) {
        if(err){
            console.log('select is err at ' + err);
        }
        callback(result[0]);
    })
};


function updatePwd(obj,callback){
    var sql ='update users set  password = ? where id = ?';
    dbConn.conn().query(sql,[getSha(obj.password),obj.id], function (err, result) {
        if(err){
            console.log('updatePwd is err at ' + err);
        }
        callback(result);
    })
};


function getAllUsers(cb){
    var sql = 'select * from users';
    dbConn.conn().query(sql, function (err, results) {
        if(err){
            console.log('getAllUsers is err at ' + err);
        }
        cb(results);
    })
}


//导出这些方法
module.exports={
    login:login,
    isExistUser:isExistUser,
    register:register,
    updatePwd:updatePwd,
    getAllUsers:getAllUsers
};