var expect = require('expect');

var ToDoApi = require('ToDoApi');

describe('ToDoApi', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(ToDoApi).toExist();
  });

  describe('setToDos', ()=> {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: 'test',
        completed: false
      }];
      ToDoApi.setToDos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badToDos = {a: 1};
      ToDoApi.setToDos(badToDos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getToDos', ()=> {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = ToDoApi.getToDos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 23,
        text: 'test',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));

      var actualTodos = ToDoApi.getToDos();
      expect(actualTodos).toEqual(todos);
    });
  });
});
