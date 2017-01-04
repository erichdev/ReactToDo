import firebase, {firebaseRef, githubProvider} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
   return {
      type: 'SET_SEARCH_TEXT',
      searchText
   };
};

export var addToDo = (todo) => {
   return {
      type: 'ADD_TODO',
      todo
   };
};

export var startAddToDo = (text) => {
   return (dispatch, getState) => {
      var todo = {
         text,
         completed: false,
         createdAt: moment().unix(),
         completedAt: null
      };
      var uid = getState().auth.uid;
      var toDoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

      return toDoRef.then(() => {
         dispatch(addToDo({
            ...todo,
            id: toDoRef.key
         }));
      });
   };
};

export var addToDos = (todos) => {
   return {
      type: 'ADD_TODOS',
      todos
   };
};

export var startAddToDos = () => {
   return (dispatch, getState) => {
      var uid = getState().auth.uid;
      var todosRef = firebaseRef.child(`users/${uid}/todos`);

      return todosRef.once('value').then((snapshot) => {
         var firebaseToDos = snapshot.val() || {};
         var parsedToDos = [];
         Object.keys(firebaseToDos).forEach((id) => {
            parsedToDos.push({
               id,
               ...firebaseToDos[id]
            });
         });
         dispatch(addToDos(parsedToDos));
      });
   };
};

export var toggleShowCompleted = () => {
   return {
      type: 'TOGGLE_SHOW_COMPLETED'
   };
};

export var updateToDo = (id, updates) => {
   return {
      type: 'UPDATE_TODO',
      id,
      updates
   };
};

export var startToggleToDo = (id, completed) => {
   return (dispatch, getState) => {
      var uid = getState().auth.uid;
      var toDoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
      var updates = {
         completed,
         completedAt: completed ? moment().unix() : null
      };

      return toDoRef.update(updates).then(() => {
         dispatch(updateToDo(id, updates));
      })
   };
}

export var login = (uid) => {
   return {
      type: 'LOGIN',
      uid
   };
};

export var startLogin = () => {
   return (dispatch, getState) => {
      return firebase.auth().signInWithPopup(githubProvider).then((result) => {
         console.log('Auth worked!', result);
      }, (error) => {
         console.log('Unable to auth', error);
      });
   };
}

export var logout = () => {
   return {
      type: 'LOGOUT'
   };
};

export var startLogout = () => {
   return (dispatch, getState) => {
      return firebase.auth().signOut().then(() => {
         console.log('Logged out');
      });
   };
}
