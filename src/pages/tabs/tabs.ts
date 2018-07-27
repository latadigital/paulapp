import { Component } from '@angular/core';


import { ConsultaPage } from '../consulta/consulta';
import { AguaPage } from '../agua/agua';
import { BlogPage } from '../blog/blog';
import { RecetasPage } from '../recetas/recetas';
import { EjerciciosPage } from '../ejercicios/ejercicios';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ConsultaPage;
  tab2Root = AguaPage;
  tab3Root = BlogPage;
  tab4Root = RecetasPage;
  tab5Root = EjerciciosPage;

  constructor() {

  }
}
