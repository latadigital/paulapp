import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PautasPage } from './pautas';

@NgModule({
  declarations: [
    PautasPage,
  ],
  imports: [
    IonicPageModule.forChild(PautasPage),
  ],
})
export class PautasPageModule {}
