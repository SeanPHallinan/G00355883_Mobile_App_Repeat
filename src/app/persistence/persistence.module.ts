import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersistencePageRoutingModule } from './persistence-routing.module';

import { PersistencePage } from './persistence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersistencePageRoutingModule
  ],
  declarations: [PersistencePage]
})
export class PersistencePageModule {}
