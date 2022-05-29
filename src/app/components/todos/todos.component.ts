import { TodoCardComponent } from './../todo-card/todo-card.component';
import { TodoService } from './../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../interfaces/Todo.interface';

const components = [
  TodoCardComponent
]

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, ...components],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

}
