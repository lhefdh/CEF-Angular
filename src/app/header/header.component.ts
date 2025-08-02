import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';
import { HidingHeaderFooterService } from '../hiding-header-footer.service';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    CommonModule
  ],
  template: `
  
      <!-- Condition pour ne pas afficher le Header si le component PageNotFound s'affiche. -->
      <header *ngIf="showHeader" class="header-container">
        <a routerLink="/">
          <img class="logo" src="Logo_au_petit_village.jpg" alt="Logo">
        </a>
        
        <div class="burger-menu">
          <input type="checkbox" id="check">
          <label for="check" class="icons">
            <i class="fa-solid fa-bars" id="menu-icon"></i>
            <i class="fa-solid fa-xmark" id="close-icon"></i>
          </label>
          <Nav class="navbar">
            <a routerLink="/">Accueil</a>
            <a routerLink="/about">A propos</a>
            <a routerLink="/contact">Contactez-nous</a>
          </Nav>
        </div>
      </header> 
  `,
  styles: ``
})
export class HeaderComponent {
  // Variable pour stocker showHeaderFooter définit dans le service pour cacher Header si la page d'erreur s'affiche
  showHeader = true;
 
  constructor(private headerFooterService: HidingHeaderFooterService) {
    this.headerFooterService.showHeaderFooter$.subscribe(visible => {
      this.showHeader = visible;
    });
  }
}
