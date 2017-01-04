var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

import * as actions from 'actions';
var {ToDo} = require('ToDo');

describe('ToDo', () => {
  it('should exist', () => {
    expect(ToDo).toExist();
  });

  it('should dispatch UPDATE_TODO action on click', () => {
    var toDoData = {
      id: 199,
      text: 'Write test',
      completed: true
    };

    var action = actions.startToggleToDo(toDoData.id, !toDoData.completed);

    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<ToDo {...toDoData} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
