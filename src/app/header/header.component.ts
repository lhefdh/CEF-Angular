import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
  ],
  template: `

      <header class="header-container">
        <img class="logo" src="Logo_au_petit_village.jpg" alt="ss" routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">
        <div class="burger-menu">
          <input type="checkbox" id="check">
          <label for="check" class="icons">
            <i class="fa-solid fa-bars" id="menu-icon"></i>
            <i class="fa-solid fa-xmark" id="close-icon"></i>
          </label>
          <Nav class="navbar">
            <a routerLink="/" style="--i:0;" routerLinkActive="active" ariaCurrentWhenActive="page">Accueil</a>
            <a routerLink="/about" style="--i:1;" routerLinkActive="active" ariaCurrentWhenActive="page">A propos</a>
            <a routerLink="/contact" style="--i:2;" routerLinkActive="active" ariaCurrentWhenActive="page">Contactez-nous</a>
          </Nav>

        </div>
      </header>
    
    
  `,
  styles: ``
})
export class HeaderComponent {

}
