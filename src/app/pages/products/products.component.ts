import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, catchError, map, merge, Observable, of, startWith, switchMap } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ProductEventsService } from 'src/app/services/productEvents.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements AfterViewInit {
  products: Product[] = [

  ];
  resultsLength: number = 0;
  isLoadingResults = false;

  productList: BehaviorSubject<Product[]> = new BehaviorSubject([] as Product[]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private productEventsService: ProductEventsService,private productService: ProductService) {
    this.productEventsService.productsEmit.subscribe((value: any) => {
      if (value.canISentProducts === false) this.products = value.products;
    })
    let canSentProducts = true;
    this.productEventsService.productsEmit.emit({ canISentProducts: canSentProducts });
  }

  getProducts(limit: number,skip: number): Observable<Product[]>{
    return this.productService.getProducts(limit,skip);
  }
  ngAfterViewInit(): void {
    merge(this.paginator!.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.getProducts(25,this.paginator!.pageIndex).pipe(catchError(() => of(null)));
        }),
        map((data: any) => {
          this.isLoadingResults = false;

          if (data === null) {
            return [];
          }
          console.log(data)
          this.resultsLength = data.total;
          return data;
        }),
      )
      .subscribe(data => (this.products = data.products));
  }
}
  

