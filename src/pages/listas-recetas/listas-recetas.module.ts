import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListasRecetasPage } from './listas-recetas';

@NgModule({
  declarations: [
    ListasRecetasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListasRecetasPage),
  ],
})
export class ListasRecetasPageModule {}
