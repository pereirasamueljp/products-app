import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing';
import { ProductModule } from 'src/app/components/product/product.module';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { HttpClientModule } from '@angular/common/http';
import { ProductEventsService } from 'src/app/services/productEvents.service';
import { ProductService } from 'src/app/services/product.service';



@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    RouterModule,
    ProductEventsService,
    ProductService
  ]
})
export class ProductsModule { }
