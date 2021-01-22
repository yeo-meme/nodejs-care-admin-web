var express = require('express');
var router = express.Router();


router.get('/',function (req,res,body) {
    res.render("resulthome");
});

// router.get('/',  function (req, res, body) {
//
//
//
//     var data = {
//         "id": 83,
//         "key": "hello",
//         "en": "Hello",
//         "mm": "This is greeting",
//         "created_at": "2016-12-05T10:14:02.928Z",
//         "updated_at": "2017-01-31T02:57:11.181Z"
// }
//
//     var string = JSON.stringify(res.json);
//     var objectValue = JSON.parse(string);
//
//     console.log("value :" + objectValue['CPID']);
//
//     // var stdatabody= JSON.stringify(res.body);
//     // var stdata = JSON.stringify(res);
//     // var datarebody = JSON.parse(stdatabody);
//     // var datares = JSON.parse(stdata);
//     //
//     // console.log("json parse body :" + datarebody +", json parse :" + datares);
//     // var objectNameReq = req;
//     // var objectNameRes = res;
//     // console.log("request inspect" + util.inspect(objectNameReq, false,null)
//     //     + "res:"+util.inspect(objectNameRes, false,null)); // populated!
//     // console.log("request Json " + JSON.stringify(objectNameReq,null,3)
//     //     + "res :"+JSON.stringify(objectNameRes,null,3)); // populated!
//     // next();
//
// });




module.exports = router;
