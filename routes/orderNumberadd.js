var express = require('express');
var router = express.Router();
var firestore = require('../config/firestoreConfig');

const db = firestore.firestore();
let ref = db.collection('payment');

router.get('/', function (req,res, next) {

    let query = ref.orderBy('timestamp','desc');
    query.where('orderStatus', '==', 0).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log("no order");
                return;
            }
            res.render("adminboard",{snapshot: snapshot});

        }).catch(err => {
        console.log("error ", err);
    });
});
module.exports = router;
