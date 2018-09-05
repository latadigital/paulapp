import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListasEjerciciosPage } from './listas-ejercicios';
 
@NgModule({
  declarations: [
    ListasEjerciciosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListasEjerciciosPage),
  ],
})
export class ListasEjerciciosPageModule {}
