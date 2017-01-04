var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import firebase from 'app/firebase';
import Login from 'Login';
import ToDoApp from 'ToDoApp';

var requireLogin = (nextState, replace, next) => {
   if (firebase.auth().currentUser) {
      next();
   }
   else {
      replace('/');
   }
};

var redirectIfLoggedIn = (nextState, replace, next) => {
   if (firebase.auth().currentUser) {
      replace('/todos');
   }
   next();
};

export default (
   <Router history={hashHistory}>
      <Route path="/">
           <Route path="todos" component={ToDoApp} onEnter={requireLogin}/>
           <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
      </Route>
   </Router>
);
