var React = require('react');
import ToDoList from 'ToDoList';
import AddToDo from 'AddToDo';
import ToDoSearch from 'ToDoSearch';
var uuid =  require('node-uuid');
var moment = require('moment');

var ToDoApp = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="page-title">To Do App</h1>

        <div className="row">
          <div className="columns small-centered small-11 medium-6 large-5">
            <div className="container">
              <ToDoSearch/>
              <ToDoList/>
              <AddToDo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ToDoApp;
