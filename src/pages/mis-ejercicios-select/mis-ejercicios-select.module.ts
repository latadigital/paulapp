import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisEjerciciosSelectPage } from './mis-ejercicios-select';

@NgModule({
  declarations: [
    MisEjerciciosSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(MisEjerciciosSelectPage),
  ],
})
export class MisEjerciciosSelectPageModule {}
