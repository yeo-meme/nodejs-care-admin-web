var express = require('express');
var router = express.Router();
var passport = require('passport');
var firebase = require("firebase");

//
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
    {
        successRedirect : '/adminboard',
        failureRedirect: '/',
        failureFlash: true
    }
    )
); // 인증 실패 시 401 리턴, {} -> 인증 스트레티지

// router.post('/', function (req,res,next) {
//    var email = req.body.loginemail;
//    var password = req.body.loginpassword;
//     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
//         .then(() => {
//             var provider = new firebase.auth.GoogleAuthProvider();
//             // Existing and future Auth states are now persisted in the current
//             // session only. Closing the window would clear any existing state even
//             // if a user forgets to sign out.
//             // ...
//             // New sign-in will be persisted with session persistence.
//             return firebase.auth().signInWithEmailAndPassword(email, password);
//         })
//         .catch((error) => {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log("error :" + errorCode + "message : "+ errorMessage);
//         });
// });

// router.post('/', function (req,res,next) {
//     firebase.auth().signInWithEmailAndPassword(req.body.loginemail ,req.body.loginpassword)
//         .then((firebaseUser) => {
//             console.log("로그인 성공");
//             passport.authenticate('store',{
//                 successRedirect : '/adminboard',
//                 failureRedirect : '/', //로그인 실패시 redirect할 url주소
//                 failureFlash : true
//             });
//             // res.redirect('/adminboard');
//         })
//         .catch((error) => {
//             // location.href="/"
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log("실패 :" + errorMessage +"number code :" + errorCode);
//             res.send('<script>alert("아이디 or 비밀번호를 확인해주세요");</script>');
//         });
// });


module.exports = router;
