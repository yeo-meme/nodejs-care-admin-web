var express = require('express');
var router = express.Router();
var firestore = require('../config/firestoreConfig');
var utils = require('../config/utils');

const db = firestore.firestore();
let ref = db.collection('payment');

router.get('/', utils.ensureAuthenticated, function (req,res, next) {
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


router.post('/',utils.ensureAuthenticated, function (req,res,next) {
    // var value = req.body.deliveryNumb;
    var docValue = req.body.userDocId;
    var numb = req.body.deliveryNumb;
    console.log("post userDocId :" +docValue + "deliveryNumb :" + numb);

    ref.doc(docValue).update({
        orderStatus: 1,
        deliveryNumber : numb
    });
    res.redirect('adminboard');
});
module.exports = router;
