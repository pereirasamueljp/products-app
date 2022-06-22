import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './shared/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Products';
  testeEvent = new EventEmitter();
  products: Product[] = [{
    id: 1,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  },
  {
    id: 2,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  },
  {
    id: 3,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  },
  {
    id: 4,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  },
  {
    id: 5,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  },
  {
    id: 6,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  },
  {
    id: 7,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  },
  {
    id: 8,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  },
  {
    id: 9,
    title: 'Ração',
    shortDescription: 'Um teste qualquer',
    availableQuantity: 0,
    description: '',
    thumbnail: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    images: ['https://material.angular.io/assets/img/examples/shiba2.jpg'],
    measureName: 'Weight',
    measure: ['Kg', 'gm'],
    price: 0,
    colors: ['#808080', '#228b22', '#f5f5f5', '#ff7c00']
  }]

  constructor(private productService: ProductService) {
    this.productService.buyEvent.subscribe((teste: any) => {
      console.log(teste)
    })
    this.productService.productsEmit.subscribe((value) => {
      if (value.canISentProducts === true) this.productService.productsEmit.emit({canISentProducts: false, products: this.products })
    })
  }
}
