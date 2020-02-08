import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = formBuilder.group({
      name: '',
      address: '',
      phone: '',
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData): void {
    this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}
