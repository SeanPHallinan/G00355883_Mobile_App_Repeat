import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  myWeather:string;
  long:any;
  lat:any;
  constructor(private storage:Storage, private geolocation:Geolocation) {}

  ngOnInit(){
    this.storage.get('weather')
    .then((data)=>{
      this.myWeather = data;
    })
    .catch()
  }
  GPS(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
