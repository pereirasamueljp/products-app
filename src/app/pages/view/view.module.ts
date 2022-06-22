import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view.routing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ViewComponent
  ],
  providers: [
    RouterModule
  ]
})
export class ViewModule { }
