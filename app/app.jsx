var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

var ToDoApp = require('ToDoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var ToDoApi = require('ToDoApi');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state ', state);

  ToDoApi.setToDos(state.todos);
});

var initialToDos = ToDoApi.getToDos();
store.dispatch(actions.addToDos(initialToDos));

// Load foundation
$(document).foundation();

// App styles
require('!style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp/>
  </Provider>,
  document.getElementById('app')
);
