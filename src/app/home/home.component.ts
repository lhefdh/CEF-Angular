import { Component, OnInit} from '@angular/core';
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
      <div id="searchWrapper">
          <input
              type="text"
              name="searchBar"
              [(ngModel)]="searchText"
              id="searchBar"
              placeholder="Recherchez votre personnage favori"
          />
      </div>
      <div class="sort-button">
        <button (click)="toggleSortDirection()">
          {{ sortDirection === 'asc' ? 'Prix Croissants ↑' : 'Prix Décroissants ↓' }}
        </button>
      </div>
      <div *ngFor= "let item of productsList  | orderBy: sortfield | filterBy : ['personnage'] : searchText " class="home-content-list">
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
export class HomeComponent implements OnInit{
  searchText : any='';
  sortfield: 'price' | '-price' | '' = '';

  sortDirection: 'asc' | 'desc' = 'asc';
  
 
  productsList: any[] = [];
  constructor(private productsService: ProductsService) {
    this.productsList = this.productsService.products;
  
     
  }
    toggleSortDirection(){
      
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this.sortfield = this.sortfield === 'price' ? '-price' : 'price';

      
      
     }

  ngOnInit(): void {

  }
}
