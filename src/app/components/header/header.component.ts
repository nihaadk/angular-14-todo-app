import { RouterModule } from '@angular/router';
import { NavItemComponent } from './../nav-item/nav-item.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [
  NavItemComponent
]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule, ...components],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}
