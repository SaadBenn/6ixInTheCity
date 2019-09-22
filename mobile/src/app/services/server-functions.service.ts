import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServerFunctionsService {

  constructor(private httpClient: HttpClient) {

  }

  getMeals(callback) {
    // let headers = new HttpHeaders()
    // headers.append('Content-Type', 'application/json')
    // headers.append('authentication', "rockstar0560")
    // return this.httpClient.post('https://957f70cb.ngrok.io', 
    //   {
    //     text: "hello"
    //   },
    //   {
    //     headers: headers
    //   }
    // ).subscribe(data=> {
    //   console.log(data)
    // })
    return this.httpClient.get('https://2907cbe7.ngrok.io/meals/menu').subscribe(data=> {
    callback(data)
    })
  }
}
