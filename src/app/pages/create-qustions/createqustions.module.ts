import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatequstionsPageRoutingModule } from './createqustions-routing.module';

import { CreatequstionsPage } from './createqustions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreatequstionsPageRoutingModule
  ],
  declarations: [CreatequstionsPage]
})
export class CreatequstionsPageModule {}
