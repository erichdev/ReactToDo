var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var {AddToDo} = require('AddToDo');
import * as actions from 'actions';

describe('AddToDo', () => {
  it('should exist', () => {
    expect(AddToDo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo passed', () => {
    var toDoText = 'Check email';
    var action = actions.startAddToDo(toDoText);
    var spy =   expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.toDoText.value = toDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo passed', () => {
    var toDoText = '';
    var spy =   expect.createSpy();
    var addToDo = TestUtils.renderIntoDocument(<AddToDo dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(addToDo));

    addToDo.refs.toDoText.value = toDoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });

});
