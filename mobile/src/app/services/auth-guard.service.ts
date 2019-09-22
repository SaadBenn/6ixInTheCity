import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    if (BackendService.isLoggedIn()) {
      return true
    } else {
      return false
    }
  }

}
