import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListqustionsPage } from './listqustions.page';

const routes: Routes = [
  {
    path: '',
    component: ListqustionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListqustionsPageRoutingModule {}
