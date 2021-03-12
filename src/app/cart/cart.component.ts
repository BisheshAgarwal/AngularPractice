import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  items = this.cart.getItems();
  checkOutForm = this.formBuilder.group({
    name: "",
    address: ""
  });

  formSubmitHandler() {
    this.items = this.cart.clearCart();
    console.log("Successfully ordered", this.checkOutForm.value);
    this.checkOutForm.reset();
  }

  removeItemHandler(id: number) {
    const newItems = this.items.filter(item => item.id != id);
    this.items = newItems;
  }

  constructor(private cart: CartService, private formBuilder: FormBuilder) {}
}
