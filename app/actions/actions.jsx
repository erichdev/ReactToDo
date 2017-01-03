import firebase, {firebaseRef} from 'app/firebase/';
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
    var toDoRef = firebaseRef.child('todos').push(todo);

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
  return (dispatch, state) => {
    var toDoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };

    return toDoRef.update(updates).then(() => {
      dispatch(updateToDo(id, updates));
    })
  };
}
