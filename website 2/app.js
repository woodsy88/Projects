var app = angular.module('todoApp', []);


function TodoCtrl($http,$scope) {

  this.http = $http;


  this.selected =true;
  this.todos = [
    {text: 'learn angular', done: false},
    {text: 'write the content for the next module', done: false},
    {text: 'buy cheese', done: true}
  ];
  
  this.filters = [
    {label: 'All', showTodo: function(todo) {return true;}},
    {label: 'Active', showTodo: function(todo) {return !todo.done;}},
    {label: 'Complete', showTodo: function(todo) {return todo.done;}}
  ]

}

TodoCtrl.prototype.addToDo = function(todo){

    var todo_object = {text:todo,done:false};
    this.todos.push(todo_object);
}


TodoCtrl.prototype.clearComplete = function(){

    for(var i = this.todos.length - 1;i >= 0;i--){
      if(this.todos[i].done){
        this.todos.splice(i,1);
      }
    }
}



app.controller('TodoCtrl', TodoCtrl);
