import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/Todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'This is the first Todo',
      createdDate: new Date()
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'This is the last Todo',
      createdDate: new Date()
    }
  ];

  setTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos(): Todo[] {
    return this.todos;
  }
}
