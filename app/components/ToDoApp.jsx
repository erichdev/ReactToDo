var React = require('react');
var ToDoList = require('ToDoList');
var AddToDo = require('AddToDo');
var ToDoSearch = require('ToDoSearch');
var uuid =  require('node-uuid');
var ToDoApi = require('ToDoApi');
var moment = require('moment');

var ToDoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText: '',
      todos: ToDoApi.getToDos()
    }
  },
  componentDidUpdate: function(){
    ToDoApi.setToDos(this.state.todos);
  },
  handleAddToDo: function (text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function(id){
    var updatedToDos = this.state.todos.map((todo) => {
      if (todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({todos:updatedToDos});
  },
  handleSearch: function(showCompleted, searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function(){
    var {todos, showCompleted, searchText} = this.state;
    var filteredToDos = ToDoApi.filterToDos(todos, showCompleted, searchText);
    return (
      <div>
        <ToDoSearch onSearch={this.handleSearch}/>
        <ToDoList todos={filteredToDos} onToggle={this.handleToggle}/>
        <AddToDo onAddToDo={this.handleAddToDo}/>
      </div>
    );
  }
});

module.exports = ToDoApp;
