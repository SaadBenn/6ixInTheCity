import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {Page} from "tns-core-modules/ui/page"
import {LottieView} from 'nativescript-lottie';
import { registerElement } from 'nativescript-angular';

registerElement('LottieView', () => LottieView);

import { Nfc } from 'nativescript-nfc';
import { NfcNdefData } from "nativescript-nfc";

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
  
    private _lottieView: LottieView;
  
    constructor(private page:Page) {
        // Use the component constructor to inject providers.
        this.animations = [
            '~/app/animations/lf20_uDCkn6.json'
        ]
        this.src = this.animations[0]
        this.page.actionBarHidden = true;
        this.instantiateNfc();
    }

    lottieViewLoaded(event) {
        this._lottieView = <LottieView>event.object;
      }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    instantiateNfc() {
        let nfc = new Nfc();

        nfc.available().then((avail) => {
            console.log(avail ? "Yes" : "No");
        });

        nfc.enabled().then((on) => {
            console.log(on ? "Yes" : "No");
        });

        nfc.setOnNdefDiscoveredListener((data: NfcNdefData) => {
            // data.message is an array of records, so:
            if (data.message) {
              for (let m in data.message) {
                let record = data.message[m];
                console.log("Ndef discovered! Message record: " + record.payloadAsString);
              }
            }
          }, {
            // iOS-specific options
            stopAfterFirstRead: true,
            scanHint: "Scan a tag, baby!"
          }).then(() => {
              console.log("OnNdefDiscovered listener added");
          });
    }
}
