import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import {Page} from "tns-core-modules/ui/page"

import {LottieView} from 'nativescript-lottie';
import { registerElement, RouterExtensions } from 'nativescript-angular';
import { ServerFunctionsService } from '~/app/services/server-functions.service';
import { FoodItem } from '~/models/food-item';
import * as dialogs from "tns-core-modules/ui/dialogs";

registerElement('LottieView', () => LottieView);

@Component({
  selector: 'ns-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  public loop: boolean = true;
  public src: string;
  public autoPlay: boolean = true;
  public animations: Array<string>;
  public nfcScanned: boolean;
  public tableNumber: string;
  public restaurantName: string;

  public _lottieView: LottieView;

  public orderSent: boolean = false;
  public meals: Array<FoodItem> = [];

  constructor(private page: Page, private router: RouterExtensions, private server: ServerFunctionsService) {
    this.page.actionBarHidden = true;

    this.animations = [
      'Animations/dots2.json'
  ]
  this.src = this.animations[0]

   }

  ngOnInit() {
   
    let self = this;
    let interval = setInterval(function() {
      self.server.getMeals((data)=> {
        self.meals = data.meals
      })
      if (self.orderSent) {
        clearInterval(interval)
      }
      console.log(self.meals)
    }, 1000)
 

  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}

lottieViewLoaded(event) {
  this._lottieView = <LottieView>event.object;
}

sendOrder() {
  let subTotal = 0.0;
  this.orderSent = true;
  console.log("order verified")

  dialogs.confirm({
    title: "Your bill",
    message: "Total: " + 35.94,
    okButtonText: "Pay now"
}).then(function () {
    console.log("Dialog closed!");
});
  
//   this.router.navigate(["/sub-total"], 
//   {queryParams: {
//     meals: this.meals
//   },transition: { name: "fade", duration: 600, curve: "linear" }, 
// })
}
}
