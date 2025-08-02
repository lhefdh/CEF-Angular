import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';





@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    RouterOutlet,
    FooterComponent,
    ],
  template: `
    <app-header ></app-header>
    <router-outlet></router-outlet>
    <app-footer ></app-footer>
  `,
  styleUrls: ['../styles.css'],
})
export class AppComponent {
  title = 'CEF-Project';
  }


