var express = require('express');
var router = express.Router();
var firestore = require('./firestoreConfig');
// var cdata = require('cdata');

const db = firestore.firestore();
let ref = db.collection('paymentSuccessAndroid');

router.get('/', function (req,res, next) {
    //document 문서
    //    ref.get()
    //       .then(function (querySnapshot) {
    //           var rows = [];
    //           if (!querySnapshot.exists) {
    //               console.log(" no order! ");
    //               return;
    //           } else {
    //               var orderData = querySnapshot.data();
    //               rows.push(orderData);
    //               console.log(orderData);
    //           }
    //
    //           res.render('adminboard', {rows :rows});
    //       });

    // var payment = {
    //     amount : String,
    //     orderer : String,
    //     ordererAddress : String,
    //     ordererPhone : String,
    //     productName : String
    // }
    var postData;

    ref.get()
        .then(snapshot => {
            if (snapshot.empty) {
                console.log("no order");
                return;
            }
            // snapshot.forEach(doc => {
            //     postData = doc.data();
            //     console.log(doc.id, '=>', doc.data());
            // });
            res.render("adminboard",{snapshot : snapshot});

        }).catch(err => {
        console.log("error ", err);
    });

});


// router.post('/detail_board', function (req
//                                        ,res,next) {
//
//
//
//     res.redirect('/detail_board');
// });

module.exports = router;
