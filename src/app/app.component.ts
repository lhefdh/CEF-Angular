import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
    ],
  template: `
    <app-header/>
    <router-outlet />
    <app-footer/>
  `,
  styleUrls: ['../styles.css'],
})
export class AppComponent {
  title = 'CEF-Project';
}
