var express = require('express');
var router = express.Router();



router.get('/', function (req, res, next) {
    res.render('login');
});


router.post('/login', function (req,res, next) {
    db.auth()
        .signInWithEmailAndPassword(req.body.email,req.body.password)
        .then(function (user) {
            console.log("로그인 성공")

        })
        .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
            console.log("firestore log in error :" + errorMessage
                +", errorCode: "+errorCode);

    });

});

module.exports = router;
