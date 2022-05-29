import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/Todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
   
  ];

  setTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
