import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, catchError, map, merge, Observable, of, startWith, switchMap } from 'rxjs';
import { FakeService } from 'src/app/services/fake.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/product.model';

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

  constructor(private productService: ProductService,private fakeService: FakeService) {
    this.productService.productsEmit.subscribe(value => {
      if (value.canISentProducts === false) this.products = value.products;
    })
    let canSentProducts = true;
    this.productService.productsEmit.emit({ canISentProducts: canSentProducts });
  }

  getProducts(limit: number): Observable<Product[]>{
    return this.fakeService.getProducts(limit);
  }
  ngAfterViewInit(): void {
    merge(this.paginator!.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.getProducts(this.paginator!.pageIndex).pipe(catchError(() => of(null)));
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
  

