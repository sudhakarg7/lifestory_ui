import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifestoryqustionsPageRoutingModule } from './lifestoryqustions-routing.module';

import { LifestoryqustionsPage } from './lifestoryqustions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LifestoryqustionsPageRoutingModule
  ],
  declarations: [LifestoryqustionsPage]
})
export class LifestoryqustionsPageModule {}
