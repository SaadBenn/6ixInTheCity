import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application";
import {Page} from "tns-core-modules/ui/page"
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '~/models/food-item';


@Component({
  selector: 'ns-sub-total',
  templateUrl: './sub-total.component.html',
  styleUrls: ['./sub-total.component.css']
})
export class SubTotalComponent implements OnInit {


  public meals: Array<FoodItem> = []

  constructor(private page: Page, private aroute: ActivatedRoute) {
    this.page.actionBarHidden = true
   }

  ngOnInit() {
    this.aroute.queryParams.subscribe((data) => {
     this.meals = data.meals as Array<FoodItem>
     console.log(this.meals[0][0])
  })
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
    console.log(this.meals)
}


}
