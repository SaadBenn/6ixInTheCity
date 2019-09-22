import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthGuardService } from "./services/auth-guard.service";
import { OrderSummaryComponent } from "./components/order-summary/order-summary.component";
import { SubTotalComponent } from "./components/sub-total/sub-total.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "order-summary", component: OrderSummaryComponent},
    {path: "sub-total", component: SubTotalComponent},
    { path: "home", loadChildren: () => import("~/app/components/home/home.module").then(m => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/components/browse/browse.module").then(m => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/components/search/search.module").then(m => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/components/featured/featured.module").then(m => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/components/settings/settings.module").then(m => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
