var express = require('express');
var router = express.Router();
var passport = require('passport');

const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'care-android-5da7f',
  keyFilename: 'serviceAccountKey.json',
});
const userSignUpRef = db.collection('users').doc('aturing');

router.get('/', function(req, res, next) {
  res.render('signup', { page: 'signup' });
});


router.post('/', function (req,res,next) {
  userSignUpRef.set({
    'email' : req.body.adminemail,
    'password' : req.body.adminpass,
    'name' : req.body.adminname,
  })
      .then(() => {
        console.log("Document Created!")
      });
  res.redirect('/index');
});

module.exports = router;