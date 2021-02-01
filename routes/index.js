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




module.exports = router;
