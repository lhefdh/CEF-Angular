import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink} from '@angular/router';
import { HidingHeaderFooterService } from '../hiding-header-footer.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink,CommonModule],
  template: `
  
    <!-- Condition pour ne pas afficher le Header si le component PageNotFound s'affiche. -->
    <footer *ngIf="showFooter" class="footer-container">
        <div class="social">
          <a class="footer-social-link" href="https://x.com/"><i class="fa-brands fa-square-x-twitter"></i></a>
          <a class="footer-social-link" href="https://www.instagram.com"><i class="fa-brands fa-square-instagram"></i></a>
          <a class="footer-social-link" href="https://www.snapchat.com"><i class="fa-brands fa-square-snapchat"></i></a>
          <a class="footer-social-link" href="https://www.facebook.com"><i class="fa-brands fa-square-facebook"></i></a>
        </div>
        <ul class="list-inline">
            <li><a class="footer-link" routerLink="/" >Accueil</a></li>
            <li><a class="footer-link" routerLink="/about">A propos</a></li>
            <li><a class="footer-link" routerLink="/contact">Contactez-nous</a></li>
        </ul>
        <p class="copyright">Au Petit Village &#169; 2025</p>
    </footer>
   
  `,
  styles: ``
})
export class FooterComponent {
  // Variable pour stocker showHeaderFooter définit dans le service pour cacher Footer si la page d'erreur s'affiche
  showFooter = true;

  constructor(private headerFooterService: HidingHeaderFooterService) {
    this.headerFooterService.showHeaderFooter$.subscribe(visible => {
      this.showFooter = visible;
    });
  }
}

