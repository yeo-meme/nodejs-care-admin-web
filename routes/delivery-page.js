var express = require('express');
var router = express.Router();
var firestore = require('../config/firestoreConfig');
var utils = require('../config/utils');

const db = firestore.firestore();
let ref = db.collection('payment');

router.get('/',  utils.ensureAuthenticated, function (req,res,next) {

    console.log("gegetget")
    let query = ref.orderBy('timestamp','desc');
    query.where('orderStatus', '==', 1).get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log("no order");
                res.render("delivery-page");
                return;
            }
            res.render("delivery-page",{snapshot: snapshot});

        }).catch(err => {
        console.log("error ", err);
    });
});

router.post('/', utils.ensureAuthenticated, function (req,res,next) {
    var id = req.body.deliveryStatus;
    console.log("null :"+ id);

    ref.doc(id).update({
        orderStatus: 2,
    });

    var address = ref.doc(id);
    let query = ref.orderBy('timestamp','desc');

    query.get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log("no order");
                res.render("delivery-page");
                return;
            }
            res.render("delivery-page",{snapshot: snapshot});

        }).catch(err => {
        console.log("error ", err);
    });
});


module.exports = router;
