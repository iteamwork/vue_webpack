var dal = require('../db/login');

exports.login = function (req, res) {
    console.log(JSON.stringify(req.body));
    dal.login(req.body, function (result) {
        if(result.length === 1){
            res.json({code:200,msg:'登录成功'});
        }else{
            res.json({code:300,msg:'登录失败'});
        }
    })
}
