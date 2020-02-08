import {Component, OnInit} from '@angular/core';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  items;

  constructor(
    private cartServise: CartService
  ) {
  }

  ngOnInit(): void {
    this.items = this.cartServise.getItems();
  }

}
