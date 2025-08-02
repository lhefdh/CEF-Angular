import { Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',

  imports: [ CommonModule],
  template: `
  <!-- Loop pour le data provenant du service -->
  <div class='product-container' *ngFor= "let item of productsList">
    <!-- Directive *ngIf pour ne retenir que le produit dont le ID correspont communiqué dans le params -->
    <div  class='product-card' *ngIf= 'id===item.id'>
      <img alt={{item.personnage}} src={{item.ImgSrc}} class ="product-img" >
      <div class='product-infos' >
        <h1>{{item.personnage}}</h1>
        <div class='product-description'>
          <h2>Description</h2>
          <p> {{"La figurine d'"+ item.personnage + " mesure "+ item.dimensions + 
          " et pèse " + item.height +". Elle se distingue par ses couleurs vives, 
          confectionnée à partir de " + item.matiere + ", elle convient aussi 
            bien aux collectionneurs qu'aux fans du personnage et peut être utilisée 
          comme élément décoratif dans divers environnements"}}</p> 
          <h3>Prix : {{item.price}}</h3>
          <button class='product-add-btn'>Ajouter au panier</button>
        </div>
      </div>     
    </div>
  </div>
  `,
  styles: [],
})
export class ProductComponent {
  // Variable pour stocker le params.
  id: string | null='';
  productsList: any[] = [];
  constructor(private route:ActivatedRoute, private  productsService: ProductsService) {
     this.route.params.subscribe(params=>{
      this.id = params['id']
      this.productsList = this.productsService.products;
     })
    }
}


