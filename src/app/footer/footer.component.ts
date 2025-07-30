import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
   
    <footer class="footer-container">
        <div class="social">
          <a class="footer-social-link" href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
          <a class="footer-social-link" href="#"><i class="fa-brands fa-square-instagram"></i></a>
          <a class="footer-social-link" href="#"><i class="fa-brands fa-square-snapchat"></i></a>
          <a class="footer-social-link" href="#"><i class="fa-brands fa-square-facebook"></i></a>
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

}
