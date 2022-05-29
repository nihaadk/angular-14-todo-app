import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const routes: Routes = [
  {
    path: 'todos',
    title: 'All Todos',
    loadComponent: () =>
      import('./app/components/todos/todos.component').then(
        (c) => c.TodosComponent
      ),
  },
  {
    path: 'add-todo',
    title: 'Add new Todo',
    loadComponent: () =>
      import('./app/components/add-todo/add-todo.component').then(
        (c) => c.AddTodoComponent
      ),
  },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
];


bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
}).catch((err) => console.error(err));
