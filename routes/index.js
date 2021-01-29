var express = require('express');
var router = express.Router();
var firebaseAdmin = require("firebase-admin");
var firebase = require("firebase");
var passport = require('passport');

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

router.post('/', passport.authenticate('store',
    {failureRedirect: '/',
        failureFlash: true}), // 인증 실패 시 401 리턴, {} -> 인증 스트레티지
    function (req, res) {
        res.redirect('/adminboard'); //성공
    });

// router.post('/', function (req,res,next) {
//     firebase.auth().signInWithEmailAndPassword(req.body.loginemail ,req.body.loginpassword)
//         .then((firebaseUser) => {
//             console.log("로그인 성공");
//             passport.authenticate('/adminboard',{
//                 successRedirect : '/adminboard',
//             });
//             // res.redirect('/adminboard');
//         })
//         .catch((error) => {
//             // location.href="/"
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log("실패 :" + errorMessage +"number code :" + errorCode);
//             res.send('<script>alert("아이디 or 비밀번호를 확인해주세요");</script>');
//
//             passport.authenticate('/',{
//                 failureRedirect : '/', //로그인 실패시 redirect할 url주소
//                 failureFlash : true
//             });
//         });
// });


module.exports = router;
