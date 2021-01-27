

var express = require('express');
var router = express.Router();
var firestore = require('./firestoreConfig');

const db = firestore.firestore();

router.post('/', function (req,res,next) {

    var value = req.body.changeValue;
    console.log("value :" + value);
});

module.exports = router;
