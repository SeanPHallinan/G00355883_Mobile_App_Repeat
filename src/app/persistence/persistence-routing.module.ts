import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersistencePage } from './persistence.page';

const routes: Routes = [
  {
    path: '',
    component: PersistencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersistencePageRoutingModule {}
