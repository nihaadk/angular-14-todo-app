import { Router, RouterModule } from '@angular/router';
import { TodoService } from './../../service/todo.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { Todo, TodoForm } from './../../interfaces/Todo.interface';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  form!: FormGroup<TodoForm>;

  constructor(private fb: UntypedFormBuilder, private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  save(): void {
    const newTodo = this.form.value as Todo;
    this.todoService.setTodo(newTodo);
    this.router.navigateByUrl('/todos');
  }

  private buildForm(): void {
    this.form = this.fb.group({
      id: this.getRandomId(),
      title: this.fb.control(null),
      description: this.fb.control(null),
      createdDate: this.getToday()
    });
  }

  private getRandomId() {
    return Math.floor(Math.random() * 100);
  }

  private getToday(): Date {
    return new Date();
  }
}
