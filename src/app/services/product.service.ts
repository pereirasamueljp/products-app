import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../shared/models/product.model";


@Injectable(
    {
        providedIn: 'root'
    }
)
export class ProductService {
    constructor(private httpClient: HttpClient) {

    }
    getProducts(limit: number, skip?: number,) {
        let filters = `limit=${limit ? limit : 20}`
        if (skip) filters += `&skipe=${skip}`
        return this.httpClient.get<Product[]>(`http://127.0.0.1:3000/products?${filters}`)
    }

}
