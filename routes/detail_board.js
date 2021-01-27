var express = require('express');
var router = express.Router();
var firestore = require('./firestoreConfig');

const db = firestore.firestore();
let ref = db.collection('payment');

router.post('/', function (req,res,next) {
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

    // refDoc.listCollections().then(collections => {
    //     collections.forEach(collection => {
    //         console.log('Found subcollection with id:', collection.id);
    //     });
    // });

});

module.exports = router;