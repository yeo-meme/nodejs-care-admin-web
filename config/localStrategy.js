const LocalStrategy = require("passport-local").Strategy;

var firebase = require("firebase");
const passport = require('passport');
const session = require('express-session');

// app.use(session({ secret: 'SECRET_CODE', resave: true, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

const firebaseConfig = {
    apiKey: "AIzaSyDHSL06PsvxwnHt0GGVzKs5G1ozfukwLIA",
    authDomain: "care-android-5da7f.firebaseapp.com",
    databaseURL: "https://care-android-5da7f.firebaseio.com",
    projectId: "care-android-5da7f",
    storageBucket: "care-android-5da7f.appspot.com",
    messagingSenderId: "285200767891",
    appId: "1:285200767891:web:a17c0b6eed2188010be666"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}

module.exports = function(passport) {

    passport.use('store', new LocalStrategy({
            inputEmailAddress : 'id',
            inputPassword : 'pw',
            passReqToCallback : true
        },
        function (req,id,pw,done) {
            firebase.auth().signInWithEmailAndPassword(inputEmailAddress ,inputPassword)
                .then((firebaseUser) => {
                    console.log("localStrategy에서 id,pw 조회 성공");
                    done(null, {'user_id': id, });
                })
                .catch((error) => {
                    // location.href="/"
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log("실패 :" + errorMessage +"number code :" + errorCode);
                    return done(false, null);
                });
        }
    ))};