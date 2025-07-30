import { Component, OnInit, Pipe } from '@angular/core';
import { ProductsService } from '../products.service';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgArrayPipesModule } from 'ngx-pipes';
import { RouterLink} from '@angular/router';




@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    FormsModule,
    NgArrayPipesModule,
    RouterLink
  ],
  template: `
  <div class="container">
  <div id="searchWrapper">
      <input
          type="text"
          name="searchBar"
          [(ngModel)]="searchText"
          id="searchBar"
          placeholder="search for a character"
      />
    </div>
    <div *ngFor= "let item of productsList | filterBy : ['personnage'] : searchText" id="pList">
      <div class="product">
        <div class="product-infos">
          <h2 >{{item.personnage}}</h2>
          <p> <a [routerLink]="['/product',item.id]">sssaas</a> </p> 
          <p>{{item.price}}</p>
        </div>
        <div class="img-card">
          <img alt= 'hi' src={{item.ImgSrc}}>
        </div>
      </div>

    </div>
  </div>
    
  `,
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  
  searchText = '';
  productsList: any[] = [];
  constructor(private productsService: ProductsService) {
    this.productsList = this.productsService.products;
   
  }
  
  ngOnInit(): void {

  }
}
