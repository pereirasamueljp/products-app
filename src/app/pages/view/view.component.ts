import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  productId: number;
  constructor(private router: ActivatedRoute) {
    this.productId = this.router.snapshot.params['id']
    console.log(this.productId)
  }

  ngOnInit(): void {

  }

}
