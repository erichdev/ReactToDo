import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDLpIY8CKD1mqXZ_a8ogXG72bKFSOaTdD8",
    authDomain: "react-todo-app-13579.firebaseapp.com",
    databaseURL: "https://react-todo-app-13579.firebaseio.com",
    storageBucket: "react-todo-app-13579.appspot.com",
    messagingSenderId: "803680763136"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
