var React = require('react');
var {connect} = require('react-redux');
var ToDoApi = require('ToDoApi');

import ToDo from 'ToDo';

export var ToDoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var filteredToDos = ToDoApi.filterToDos(todos, showCompleted, searchText);
    var renderTodos = () => {
      if (filteredToDos.length === 0){
        return (
          <p className="container__message">Nothing to do</p>
        );
      }
      return filteredToDos.map((todo) => {
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
