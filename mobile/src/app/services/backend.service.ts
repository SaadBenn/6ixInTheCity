import { Injectable } from '@angular/core';
import { getString, setString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class BackendService{

  constructor() { }


  static isLoggedIn(): boolean {
    return !!getString("token");    // get truthy value of string
  }

  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }

  static get firstName(): string {
    return getString("firstName");
  }

  static set firstName(theFirstName: string) {
    setString("firstName", theFirstName);
  }

}
