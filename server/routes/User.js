var dal = require('../db/login');

exports.login = function (req, res) {
    console.log(JSON.stringify(req.body));
    dal.login(req.body, function (result) {
        if(result.length === 1){
            res.json({"data":{code:200,msg:'登录成功'}});
        }else{
            res.json({"data":{code:200,msg:'登录失败'}});
        }
    })
}
