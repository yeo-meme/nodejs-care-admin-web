

var express = require('express');
var router = express.Router();
var firebase = require("../routes/firestoreConfig");

// const firebaseConfig = {
//     apiKey: "AIzaSyDHSL06PsvxwnHt0GGVzKs5G1ozfukwLIA",
//     authDomain: "care-android-5da7f.firebaseapp.com",
//     databaseURL: "https://care-android-5da7f.firebaseio.com",
//     projectId: "care-android-5da7f",
//     storageBucket: "care-android-5da7f.appspot.com",
//     messagingSenderId: "285200767891",
//     appId: "1:285200767891:web:a17c0b6eed2188010be666"
// };
//
// firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

router.post('/', function (req,res,next) {
    // var array = [];
    var value = req.body.myValue;
    //
    // console.log("doc id :" + doc);
    // doc.forEach((doc, index) => {
    //     console.log("index :" + index);
    // });
    console.log("쉽게: "+ value);
    // const citiesRef = db.collection('paymentSuccessAndroid');
    // citiesRef.where('orderer', '==', req.body).get()
    //     .then((snapshot) => {
    //
    //     });
    // res.redirect('detail_board');
    res.render('detail_board', {value :value});
});

module.exports = router;