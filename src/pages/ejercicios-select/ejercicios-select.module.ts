import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EjerciciosSelectPage } from './ejercicios-select';

@NgModule({
  declarations: [
    EjerciciosSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(EjerciciosSelectPage),
  ],
})
export class EjerciciosSelectPageModule {}
