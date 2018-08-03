import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { getScrollData } from '../../../node_modules/ionic-angular/umd/components/input/input';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
city
  City;
  location;
  myWeather;

  constructor(public navCtrl: NavController, public navParams: NavParams,public data: DataProvider) {
      
   
  //data.getData(this.City)
  }

  ionViewDidLoad() {
    
  }
click(){
 
  this.data.getData(this.City).subscribe(myInfo =>{
    this.myWeather = myInfo;
  });
}
}
