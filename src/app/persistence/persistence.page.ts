import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/Storage';
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-persistence',
  templateUrl: './persistence.page.html',
  styleUrls: ['./persistence.page.scss'],
})
export class PersistencePage implements OnInit {
  myWeather:string = "Undeclared";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get("weather")
    .then((data)=>{
      this.myWeather=data;
    })
    .catch();
  }

  updateWeather(){
    this.storage.set('weather',this.myWeather)
    .then(()=>{
      this.navCtrl.navigateBack('/home');
    })
    .catch()
  }
}
