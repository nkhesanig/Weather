import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { getScrollData } from '../../../node_modules/ionic-angular/umd/components/input/input';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  city
  City:string='';
location
  myWeather;

  temperatureMain;
  unit;

  info;
inforList;
town: string;
counter = 0;
temparature;
temp_min;
temp_max;

flipState: String = 'notFlipped';
flyInOutState: String = 'out';
fadeState: String = 'visible';
bounceState: String = 'noBounce';

visibleState = 'visible';
conditionCode;
iconCode : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private data: DataProvider) {
    {
 
      this.data.getData("Pretoria").subscribe(myInfo =>{
        this.myWeather = myInfo;
        this.iconCode = this.myWeather.weather[0].icon;
        this.conditionCode = "http://openweathermap.org/img/w/"+ this.iconCode +".png";
  
        // console.log("--------------------------->" + this.myWeather + " --> city = " + this.city);
      });
      
  
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
 search(){
 
  this.data.getData(this.City).subscribe(myInfo =>{
    this.myWeather = myInfo;
    this.iconCode = this.myWeather.weather[0].icon;
    this.conditionCode = "http://openweathermap.org/img/w/"+ this.iconCode +".png";
  });


  console.log("-----> outside" + this.temperatureMain);
  if(this.unit === "celsius"){

  console.log("-----------------------------------------------------------> in cel" + this.myWeather.main.temp );
    this.temperatureMain = (this.myWeather.main.temp - 273.15).toFixed(1);
    this.temp_max =  (this.myWeather.main.temp_max - 273.15).toFixed(1);
    this.temp_min =  (this.myWeather.main.temp_min - 273.15).toFixed(1);
 
  }else if(this.unit === "Kelvins"){

    console.log("-----------------------------------------------------------> in Kelvin" + this.unit );
    this.temperatureMain = (this.myWeather.main.temp).toFixed(1);
    this.temp_max =  (this.myWeather.main.temp_max).toFixed(1);
    this.temp_min =  (this.myWeather.main.temp_min).toFixed(1);

  }else if(this.unit === "Farenheight"){
    console.log("-----------------------------------------------------------> in Faren" + this.unit );
       this.temperatureMain = (this.myWeather.main.temp -457.67).toFixed(1);
    this.temp_max =  ((this.myWeather.main.temp_max) -457.67).toFixed(1);
    this.temp_min =  ((this.myWeather.main.temp_min)  -457.67).toFixed(1);
  }

  }
}
