var express = require('express');
var router = express.Router();
var firestore = require('./firestoreConfig');

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


router.post('/',function (req,res,next) {
    var value = req.body.deliveryNumb;
    var docValue = req.body.userDocId;
    console.log("post arrvied :" +value + "id :" + docValue);

    ref.doc(docValue).update({
        deliveryNumber : value,
        orderStatus: 1
    });
    res.redirect('adminboard');
});
module.exports = router;
