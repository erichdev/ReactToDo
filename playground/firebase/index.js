import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDLpIY8CKD1mqXZ_a8ogXG72bKFSOaTdD8",
  authDomain: "react-todo-app-13579.firebaseapp.com",
  databaseURL: "https://react-todo-app-13579.firebaseio.com",
  storageBucket: "react-todo-app-13579.appspot.com",
  messagingSenderId: "803680763136"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'ToDo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Erich',
    age: 29
  }
});

firebaseRef.update({
  isRunning: true,
  'app/name': 'ToDo Application'
});

var newNoteRef = firebaseRef.child('notes');
newNoteRef.on('child_added', (snapshot) => {
  console.log('added', snapshot.key, snapshot.val());
});

newNoteRef.push({
  text: 'New note'
});
