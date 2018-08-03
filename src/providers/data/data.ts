import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }


  getData(City:string){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+City+'&APPID=1d027d8c958b2080cc91f87c494ca384');
     
  }

  
}
