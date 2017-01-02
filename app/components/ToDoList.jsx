var React = require('react');
var {connect} = require('react-redux');
var ToDoApi = require('ToDoApi');

import ToDo from 'ToDo';

export var ToDoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length === 0){
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return ToDoApi.filterToDos(todos, showCompleted, searchText).map((todo) => {
        return <ToDo {...todo} key={todo.id} />
      });
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ToDoList);
