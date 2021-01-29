
var express = require('express');
var router = express.Router();
var firestore = require('./firestoreConfig');

const db = firestore.firestore();
let ref = db.collection('payment');


router.get('/', function (req,res,next) {
    console.log("gegetget")
    let query = ref.orderBy('timestamp','desc');
    query.where('orderStatus', '==', 2).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log("no order");
                res.render("delivery-finish");
                return;
            }
            res.render("delivery-finish",{snapshot: snapshot});

        }).catch(err => {
        console.log("error ", err);
    });
});
router.post('/insert', function (req,res,next) {

});

module.exports = router;
