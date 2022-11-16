// Requiring firebase (as our db)

const firebase = require('firebase/compat/app'); require("firebase/compat/firestore");require("firebase/compat/storage");
// Importing our configuration to initialize our app
const config = require('./config');

// Creates and initializes a Firebase app instance. Pass options as param
const db = firebase.initializeApp(config.firebaseConfig);
module.exports = db;