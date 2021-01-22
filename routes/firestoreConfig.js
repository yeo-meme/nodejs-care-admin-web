var admin = require('firebase-admin');
var firebase = require('firebase');
var serviceAccount = require('../serviceAccountKey');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


module.exports = admin;
