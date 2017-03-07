var dal = require('../db/login');

exports.login = function (req, res) {
    console.log(JSON.stringify(req.body));
    dal.login(req.body, function (result) {
        if(result.length === 1){
            res.json({code:200,msg:'登录成功',user:result[0]});
        }else{
            res.json({code:300,msg:'登录失败'});
        }
    })
}


exports.register = function (req, res) {
    var c_user = req.body;

    dal.isExistUser(c_user, function (user) {
        //console.log("user: "+ JSON.stringify(user));
        if(!user){
            dal.register(c_user, function (result) {
                //console.log("result: "+ JSON.stringify(result));
                if(result.affectedRows == 1 )
                    res.json({code:200,msg:'注册成功'});
                else
                    res.json({code:401,msg:'注册失败'});
            })
        }else{
            res.json({code:300,msg:'改手机号已存在...'});
        }
    })
}
