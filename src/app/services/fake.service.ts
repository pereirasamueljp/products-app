import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../shared/models/product.model";


@Injectable(
    {
        providedIn: 'root'
    }
)
export class FakeService {
    constructor(private httpClient: HttpClient){
        
    }
    getProducts(limit: number){
        return this.httpClient.get<Product[]>(`https://dummyjson.com/products?limit=150`)
    }

}
