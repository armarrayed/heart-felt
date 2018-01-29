var _ = require('underscore-node');

var user = [{ userName: 'Eswar', password: 'eswar', type: 2,uid:'cs110c' },
{ userName: 'Mahesh', password: 'mahesh', type: 1, uid: 'cs111c' },
{ userName: 'Raju', password: 'raju', type: 3, uid: 'cs112c' }]

exports.login = function(req,res){

    console.log(req.headers)
    var logInId = req.body.params.userName;
    var logInPassword = req.body.params.password;
    var loggedInUser = {};
        for(var x=0;x<user.length;x++){
            if (user[x].userName == logInId){
                if (user[x].password == logInPassword) {
                    loggedInUser.code = 200;
                    loggedInUser.message = 'ok';
                    loggedInUser.result = [];
                    loggedInUser.result.push(user[x])
                }
            }
        }
        if(_.isEmpty(loggedInUser)){
            loggedInUser.code = 616;
            loggedInUser.message = 'Login Failed. Username or password is incorrect';
        }
        res.send(loggedInUser);
}