import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifestoryqustionsPage } from './lifestoryqustions.page';

const routes: Routes = [
  {
    path: '',
    component: LifestoryqustionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifestoryqustionsPageRoutingModule {}
