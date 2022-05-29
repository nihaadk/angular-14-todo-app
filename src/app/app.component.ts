import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

const components = [
  HeaderComponent
]
@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterModule, ...components],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'Standalone Component';
}
