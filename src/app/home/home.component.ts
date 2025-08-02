import { Component} from '@angular/core';
import { ProductsService } from '../products.service';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgArrayPipesModule } from 'ngx-pipes';
import { RouterLink} from '@angular/router';




@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    NgArrayPipesModule,
    RouterLink,
  ],
  template: `
    <div class="home-container">
      <p class="home-presentation">Au Petit Village est votre en ligne pour figurines d'Astérix et ses amis</p>
      <!-- Barre de recherche -->
      <div id="searchWrapper">
          <input
              type="text"
              name="searchBar"
              [(ngModel)]="searchText"
              id="searchBar"
              placeholder="Recherchez votre personnage favori"
          />
      </div>
      <!-- Bouton pour le tri selon la valeur attribué à la variable de tri sortVar-->
      <div class="sort-button">
        <button (click)="toggleSortDirection()">
          {{ sortVar === 'price' ? 'Prix Croissants ↑' : 'Prix Décroissants ↓' }}
        </button>
      </div>
      <!-- Loop qui crée des cartes de produits qui correspondent à la recherche. -->
      <div *ngFor= "let item of productsList  | orderBy: sortVar | filterBy : ['personnage'] : searchText " class="home-content-list">
        <!-- Tout clic sur la carte de produit transmet le Id en params. -->
        <div class="home-product" [routerLink]="['/product',item.id]">
          <div class="home-product-card">
            <h2 >{{item.personnage}}</h2>
            <div class="home-product-infos">
              <h3>Dimensions: {{item.dimensions}}</h3>
              <h3>Poids: {{item.height}}</h3>
              <h3>Matière: {{item.matiere}}</h3>
              <h3 class="home-product-price">{{item.price | currency:'EUR'}}</h3>
            </div>
          </div>
          <img class="home-img-card" alt= 'hi' src={{item.ImgSrc}}>
        </div>
        <hr>
      </div> 
    </div>
  `,
  styles: ``
})
export class HomeComponent {
  searchText : any='';
  // Variable pour définir le sens du tri et la valeur à afficher sur le bouton de tri.
  sortVar: 'price' | '-price' | '' = '';
  // Variable pour stocker le DATA des produits provenant du service "productsSarvice"
  productsList: any[] = [];
  constructor(private productsService: ProductsService) {
    this.productsList = this.productsService.products;
  }
  // Méthode pour inverser le sens du tri 
  toggleSortDirection(){
    this.sortVar = this.sortVar === 'price' ? '-price' : 'price';
  }
}
