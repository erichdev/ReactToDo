var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

import  ToDoApp from 'ToDoApp';

var actions = require('actions');
var store = require('configureStore').configure();
var ToDoApi = require('ToDoApi');
import Login from 'Login';

store.dispatch(actions.startAddToDos());

// Load foundation
$(document).foundation();

// App styles
require('!style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/">
            <Route path="todos" component={ToDoApp} />
            <IndexRoute component={Login} />
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
