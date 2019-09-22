import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConfirmOrderComponent } from './components/Onboarding/confirm-order/confirm-order.component';
import { EnjoyMealComponent } from "./components/Onboarding/enjoy-meal/enjoy-meal.component";
import { PayComponent } from "./components/Onboarding/pay/pay.component";
import { SubTotalComponent } from "./components/sub-total/sub-total.component";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        OrderSummaryComponent,
        SubTotalComponent,
        ConfirmOrderComponent,
        EnjoyMealComponent,
        PayComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
