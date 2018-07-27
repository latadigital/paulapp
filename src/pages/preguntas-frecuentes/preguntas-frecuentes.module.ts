import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreguntasFrecuentesPage } from './preguntas-frecuentes';

@NgModule({
  declarations: [
    PreguntasFrecuentesPage,
  ],
  imports: [
    IonicPageModule.forChild(PreguntasFrecuentesPage),
  ],
})
export class PreguntasFrecuentesPageModule {}
