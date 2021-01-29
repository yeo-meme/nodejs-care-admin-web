
var express = require('express');
var router = express.Router();
var firestore = require('../config/firestoreConfig');

const db = firestore.firestore();
let ref = db.collection('payment');


router.get('/', function (req,
                           res,next) {

    ref.where('orderStatus', '==', 1).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log("no order");
                res.render("sendNumberPage",{snapshot : snapshot});
                return;
            }
            res.render("sendNumberPage",{snapshot : snapshot});

        }).catch(err => {
        console.log("error ", err);
    });
});

router.post('/', function (req,res,next) {
    var cc = req.body.delivery_check;
    console.log("check :" + cc);
});

module.exports = router;
