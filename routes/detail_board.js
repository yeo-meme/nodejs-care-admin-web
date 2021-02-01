var express = require('express');
var router = express.Router();
var firestore = require('../config/firestoreConfig');
var utils = require('../config/utils');

const db = firestore.firestore();
let ref = db.collection('payment');


router.post('/', utils.ensureAuthenticated, function (req,res,next) {
    var selectedId = req.body.myValue;
    console.log("쉽게: "+ selectedId);
    let refDoc = ref.doc(selectedId);

    refDoc.get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log("no order");
                return;
            }
            console.log("order :" + snapshot );
            res.render("detail_board",{snapshot : snapshot , selectedId: selectedId });

        }).catch(err => {
        console.log("error ", err);
    });


});

module.exports = router;