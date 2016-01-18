'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.addTodo = function() {
    var todo = {name: "This is a new todo."};
    $scope.todos.unshift(todo);
    // push method add stuff to the end of the todos array
    //unshift puts them at the start of the array
  };
  
  $scope.helloWorld = dataService.helloWorld;
  
  dataService.getTodos(function(response) { 
      console.log(response.data);  
      $scope.todos = response.data;
    });
  
  $scope.deleteTodo = function(todo, $index) {
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1);
  };
  
  $scope.saveTodos = function(todo) {
    var filteredTodos = $scope.todos.filter(function(todo){
    //filter is a method for filtering through the todos array
    if (todo.edited) {
    
    return todo;
    }
      
    })
    dataService.saveTodos(filteredTodos);
  };
})