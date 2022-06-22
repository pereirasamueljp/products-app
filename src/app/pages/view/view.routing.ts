import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';

export const ViewRoutes: Routes = [
    {
        path: '',
        component: ViewComponent,
        // data: {
        //     breadcrumbInfo: {
        //         base: { 
        //             nome: 'View',
        //             url: '/view'
        //         },
        //         nome: 'Posição Geral'
        //     }
        // }
    }
];

@NgModule({
    imports: [RouterModule.forChild(ViewRoutes)],
    exports: [RouterModule],
})
export class ViewRoutingModule { }