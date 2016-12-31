var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var ToDoApp = require('ToDoApp');

describe('ToDoApp', () => {
  it('should exist', () => {
    expect(ToDoApp).toExist();
  });

  it('should add todo to the todos state on handleAddToDo', () => {
    var toDoText = 'test';
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);

    toDoApp.setState({todos:[]});
    toDoApp.handleAddToDo(toDoText);

    expect(toDoApp.state.todos[0].text).toBe(toDoText);
    expect(toDoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var toDoData = [{
      id: 11,
      text: 'Test feature',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }];
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({todos: toDoData});

    expect(toDoApp.state.todos[0].completed).toBe(false);
    toDoApp.handleToggle(11);
    expect(toDoApp.state.todos[0].completed).toBe(true);
    expect(toDoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle todo from completed to not complete', () => {
    var toDoData = [{
      id: 11,
      text: 'Test feature',
      completed: true,
      createdAt: 0,
      completedAt: 123
    }];
    var toDoApp = TestUtils.renderIntoDocument(<ToDoApp/>);
    toDoApp.setState({todos: toDoData});

    expect(toDoApp.state.todos[0].completed).toBe(true);
    toDoApp.handleToggle(11);
    expect(toDoApp.state.todos[0].completed).toBe(false);
    expect(toDoApp.state.todos[0].completedAt).toNotExist();
  });
});
