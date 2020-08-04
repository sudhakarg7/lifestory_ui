import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListqustionsPageRoutingModule } from './listqustions-routing.module';

import { ListqustionsPage } from './listqustions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ListqustionsPageRoutingModule
  ],
  declarations: [ListqustionsPage]
})
export class ListqustionsPageModule {}
