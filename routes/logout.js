var express = require('express');
var router = express.Router();
var firebase = require("firebase");



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}


router.get('/', function (req,res,next) {
    req.logout();
    req.session.destroy(function (err) {
        if (err) {
            return next(err);
        }

        // destroy session data
        req.session = null;

        // redirect to login
        res.redirect('/');
    });
});


router.post('/', function (req,res,next) {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("post ----> 로그아웃 성공");

        res.redirect('/');
    }).catch((error) => {
        // An error happened.
        console.log("post ---->로그아웃 실패");
    });
});
module.exports = router;
