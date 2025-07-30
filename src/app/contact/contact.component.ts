import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  template: `
    <div class="contact-container">
        <div class="contact-box">
            <div class="contact-info-card">
                <h2 class="contact-info-title">Pour nous contacter</h2>
                <ul class="contact-info-details">
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <span>Téléphone:</span> <a href="tel:+33779458283">+33 779 458 283</a>
                    </li>
                    <li>
                        <i class="fas fa-paper-plane"></i>
                        <span>Email:</span> <a href="mailto:lhefdh@gmail.com">Lhefdh"&#64;"gmail.com</a>
                    </li>
                    <li>
                        <i class="fas fa-globe"></i>
                        <span>Website:</span> <a href="https://github.com/lhefdh">yoursite.com</a>
                    </li>
                </ul>
                <ul class="contact-social-icons">
                    <a class="contact-social-link" href="#"><i class="fa-brands fa-square-x-twitter"></i></a>
                    <a class="contact-social-link" href="#"><i class="fa-brands fa-square-instagram"></i></a>
                    <a class="contact-social-link" href="#"><i class="fa-brands fa-square-snapchat"></i></a>
                    <a class="contact-social-link" href="#"><i class="fa-brands fa-square-facebook"></i></a>
                </ul>
            </div>
            <div class="contact-form">
                <form action="#" method="POST">
                    <h2 class="contact-form-title">Ecrivez nous un message</h2>
                    <h3 class="contact-form-sub-title">Notre équipe vous répondra rapidement</h3>
                    <div class="contact-form-fields">
                        <div class="contact-form-group">
                            <input type="text" class="fname" placeholder="Prénom">
                        </div>
                        <div class="contact-form-group">
                            <input type="text" class="lname" placeholder="Nom">
                        </div>
                        <div class="contact-form-group">
                            <input type="email" class="email" placeholder="Email">
                        </div>
                        <div class="contact-form-group">
                            <input type="number" class="phone" placeholder="Téléphone">
                        </div>
                        <div class="contact-form-group">
                            <textarea name="message" id="" placeholder="Votre Message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Envoyez" class="contact-submit-button">
                </form>
            </div>
        </div>
    </div>
  `,
  styles: ``
})
export class ContactComponent {

}
