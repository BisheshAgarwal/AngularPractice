import { Injectable } from "@angular/core";

@Injectable()
export class CartService {
  items = [];
  total: number;
  addToCart(product) {
    this.items.push(product);
  }
  removeFromCart(id) {
    const newItems = this.items.filter(item => item.id != id);
    this.items = newItems;
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  getTotal() {
    this.total = this.items.reduce((acc, curr) => acc + curr.price, 0);
    return this.total;
  }
  constructor() {}
}
