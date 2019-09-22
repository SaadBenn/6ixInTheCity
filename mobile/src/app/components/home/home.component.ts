import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page"
import {LottieView} from 'nativescript-lottie';
import { registerElement } from 'nativescript-angular';

registerElement('LottieView', () => LottieView);

import { Nfc } from 'nativescript-nfc';
import { NfcNdefData } from "nativescript-nfc";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    styleUrls: ['./home.component.css'],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public loop: boolean = true;
    public src: string;
    public autoPlay: boolean = true;
    public animations: Array<string>;
    public nfcScanned: boolean;
    public tableNumber: string;
    public restaurantName: string;

    public _lottieView: LottieView;

    constructor(private page: Page, private router: RouterExtensions) {
        // Use the component constructor to inject providers.
        this.animations = [
            'Animations/animation.json'
        ]
        this.src = this.animations[0]


        this.nfcScanned = false;
        this.page.actionBarHidden = true;
        this.instantiateNfc();
    }

    lottieViewLoaded(event) {
        this._lottieView = <LottieView>event.object;
      }

    ngOnInit(): void {
   
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    instantiateNfc() {
        let nfc = new Nfc();
        let self = this;
        nfc.available().then((avail) => {
            console.log(avail ? "Yes" : "No");
        });

        nfc.enabled().then((on) => {
            console.log(on ? "Yes" : "No");
        });


        nfc.setOnNdefDiscoveredListener((data: NfcNdefData) => {
            // data.message is an array of records, so:
            if (data.message) {
                let record = data.message[0];
                console.log("Ndef discovered! Message record: " + record.payloadAsString);
                let sessionInformation = record.payloadAsString.split(" ")
                console.log(sessionInformation);
                self.restaurantName = sessionInformation[0]
                self.tableNumber = sessionInformation[1]
                this.router.navigate(["/order-summary"], {
                    transition: { name: "slideBottom", duration: 500, curve: "ease" }
                })
            }
        }, {
            // iOS-specific options
            stopAfterFirstRead: true,
            scanHint: "Scan a tag, baby!"
        }).then(() => {
            console.log("OnNdefDiscovered listener added");
        });
    }

    simulateNFC() {
        console.log("NFC tapped")
        this.router.navigate(["/order-summary"], {
            transition: { name: "fade", duration: 600, curve: "linear" },
            // clearHistory: true
        })    
    }
}
