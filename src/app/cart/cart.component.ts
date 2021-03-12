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
  total = this.cart.getTotal();

  formSubmitHandler() {
    this.items = this.cart.clearCart();
    window.alert("Check console");
    console.log("Successfully ordered", this.checkOutForm.value);
    this.checkOutForm.reset();
  }

  removeItemHandler(id: number) {
    this.cart.removeFromCart(id);
    this.items = this.cart.getItems();
    this.total = this.cart.getTotal();
  }

  constructor(private cart: CartService, private formBuilder: FormBuilder) {}
}
