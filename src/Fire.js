import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAYNLyGQ33d2R2UmsfKDoc1mcHxAYP5Fl4",
    authDomain: "final-test-75b55.firebaseapp.com",
    databaseURL: "https://final-test-75b55.firebaseio.com",
    projectId: "final-test-75b55",
    storageBucket: "final-test-75b55.appspot.com",
    messagingSenderId: "570333109966"
  };

  firebase.initializeApp(config);
  export const ref = firebase.database().ref();
  export const auth = firebase.auth;
  export const providerGoogle = new firebase.auth.GoogleAuthProvider();
  export const providerFacebook = new firebase.auth.FacebookAuthProvider();