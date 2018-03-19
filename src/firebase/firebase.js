import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDTO67AYLs1pDCaPUY1rw1z7YIuH23OIkY",
    authDomain: "medi-app-683ba.firebaseapp.com",
    databaseURL: "https://medi-app-683ba.firebaseio.com",
    projectId: "medi-app-683ba",
    storageBucket: "medi-app-683ba.appspot.com",
    messagingSenderId: "869873793792"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};