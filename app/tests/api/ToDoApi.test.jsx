var expect = require('expect');

var ToDoApi = require('ToDoApi');

describe('ToDoApi', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(ToDoApi).toExist();
  });

  describe('filterToDos', () => {
    var todos = [{
      id: 1,
      text: 'One',
      completed: true
    },{
      id: 2,
      text: 'Two',
      completed: false
    }, {
      id: 3,
      text: 'Three',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredToDos = ToDoApi.filterToDos(todos, true, '');
      expect(filteredToDos.length).toBe(3);
    });

    it('should return non-completed items if showCompleted is false', () => {
      var filteredToDos = ToDoApi.filterToDos(todos, false, '');
      expect(filteredToDos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredToDos = ToDoApi.filterToDos(todos, true, '');

      expect(filteredToDos[0].completed).toBe(false);
    });

    it('should return all items if searchtext is empty', () => {
      var filteredToDos = ToDoApi.filterToDos(todos, true, '');

      expect(filteredToDos.length).toBe(3);
    });

    it('should return filtered items if searchtext is not empty', () => {
      var filteredToDos = ToDoApi.filterToDos(todos, true, 'w');

      expect(filteredToDos.length).toBe(1);
    });

  });
});
