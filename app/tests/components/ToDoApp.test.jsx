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
  });
});
