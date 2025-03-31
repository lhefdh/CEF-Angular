import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <nav>
      <ul>
        <li><a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Accueil</a></li>
        <li><a routerLink="/about" routerLinkActive="active" ariaCurrentWhenActive="page">A propos</a></li>
      </ul>
    </nav>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'CEF-Project';
}
