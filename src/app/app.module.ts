import { HttpClientModule } from '@angular/common/http';// Json
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/Storage';//Data storage
import { Geolocation } from '@ionic-native/geolocation/ngx';//Plugin

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ IonicStorageModule, HttpClientModule, BrowserModule, 
    IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})

export class AppModule {}
