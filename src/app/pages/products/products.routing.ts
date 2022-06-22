import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

export const ProductsRoutes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        // data: {
        //     breadcrumbInfo: {
        //         base: { 
        //             nome: 'Products',
        //             url: '/Products'
        //         },
        //         nome: 'Posição Geral'
        //     }
        // }
    }
];

@NgModule({
    imports: [RouterModule.forChild(ProductsRoutes)],
    exports: [RouterModule],
})
export class ProductsRoutingModule { }