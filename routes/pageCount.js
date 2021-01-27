
var express = require('express');
var router = express.Router();
var firestore = require('./firestoreConfig');

const db = firestore.firestore();

router.post('/',function (req,res,next) {


    var value = req.body.pageValue;
    console.log("page :" + value);

    res.redirect('adminboard');
});

module.exports = router;
