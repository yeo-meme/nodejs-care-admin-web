var express = require('express');
var router = express.Router();
var firebaseAdmin = require("firebase-admin");
var firebase = require("firebase");


const firebaseConfig = {
    apiKey: "AIzaSyDHSL06PsvxwnHt0GGVzKs5G1ozfukwLIA",
    authDomain: "care-android-5da7f.firebaseapp.com",
    databaseURL: "https://care-android-5da7f.firebaseio.com",
    projectId: "care-android-5da7f",
    storageBucket: "care-android-5da7f.appspot.com",
    messagingSenderId: "285200767891",
    appId: "1:285200767891:web:a17c0b6eed2188010be666"
};

firebase.initializeApp(firebaseConfig);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req,res,next) {
    firebase.auth().signInWithEmailAndPassword(req.body.loginemail ,req.body.loginpassword)
        .then((firebaseUser) => {
            console.log("로그인 성공");
            res.redirect('/adminboard');
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("실패 :" + errorMessage +"number code :" + errorCode);
            res.send('<script>alert("아이디 or 비밀번호를 확인해주세요");location.href="/";</script>');
        });
});


module.exports = router;
