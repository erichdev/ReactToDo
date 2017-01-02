var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'New item'
    };

    var res = actions.addToDo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate addtodos action', () => {
    var todos = [{
      id: 123,
      text: 'Anything',
      completed: false,
      completedAt: undefined,
      createdAt: 3000
    }];

    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = actions.addToDos(action.todos);
    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate toggle to do action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 20
    };

    var res = actions.toggleToDo(action.id);
    expect(res).toEqual(action);
  });

});
