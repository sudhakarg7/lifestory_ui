import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatequstionsPage } from './createqustions.page';

const routes: Routes = [
  {
    path: '',
    component: CreatequstionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatequstionsPageRoutingModule {}
