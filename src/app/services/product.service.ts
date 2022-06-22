import { EventEmitter, Injectable, Input, Output } from "@angular/core";
import { Product } from "../shared/models/product.model";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductService {
    addToCartEvent = new EventEmitter();
    buyEvent = new EventEmitter();
    favoriteEvent = new EventEmitter();
    shareEvent = new EventEmitter();
    erroEmit = new EventEmitter();
    productsEmit = new EventEmitter();

    constructor() {

    }
}