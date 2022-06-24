import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductEventsService } from 'src/app/services/productEvents.service';
import { Product } from 'src/app/shared/models/product.model';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    title: '',
    shortDescription: '',
    availableQuantity: 0,
    description: '',
    thumbnail: '',
    images: [''],
    measureName: '',
    price: 0,
  };
  // @Output() addToCartEvent = new EventEmitter();
  // @Output() buyEvent = new EventEmitter();
  // @Output() favoriteEvent = new EventEmitter();
  // @Output() shareEvent = new EventEmitter();

  measure: string = '';
  color: string = '';

  constructor(
    private router: Router,
    private productEventsService: ProductEventsService,
    public imageDialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  buy() {
    this.productEventsService.buyEvent.emit({ id: this.product.id, measureName: this.product.measureName, measure: this.measure, color: this.color })
  }

  setColorByClick(color: string) {
    if (color == this.color) {
      let element = document.getElementById(`${this.product.id + color}`)
      element!.style.opacity = '1';
      element!.ariaDisabled = 'false';
      this.color = '';
      return
    }
    let element = document.getElementById(`${this.product.id + color}`)
    element!.style.opacity = '0.3';
    element!.ariaDisabled = 'true';
    this.product.colors?.forEach(productColor => {
      if (productColor != color) {
        element = document.getElementById(`${this.product.id + productColor}`)
        element!.style.opacity = '1';
      }
    });
    this.color = color
  }
  share() {
    this.productEventsService.shareEvent.emit(this.router.url + `${this.product.id}`)
  }
  favorite() {
    let element = document.getElementById(`${this.product.id}favorite`);
    if (element!.style.color == 'rgb(255, 0, 0)') {
      console.log(element)
      this.productEventsService.favoriteEvent.emit({ id: this.product.id, favorite: false })
      element!.style.color = '#000000';
      return;
    }
    this.productEventsService.favoriteEvent.emit({ id: this.product.id, favorite: true })
    element!.style.color = '#FF0000'
  }
  addToCart() {
    this.productEventsService.addToCartEvent.emit({ id: this.product.id, measureName: this.product.measureName, measure: this.measure, color: this.color })
  }
  showProduct() {
    this.router.navigate([`product`, { id: this.product.id }])
  }

  openImageDialog() {
    this.imageDialog.open(ImageDialogComponent,{data: this.product.thumbnail})
  }

}
