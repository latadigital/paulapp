import { Component } from '@angular/core';

import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { AguaPage } from '../agua/agua';
import { BlogPage } from '../blog/blog';
import { RecetasPage } from '../recetas/recetas';
import { EjerciciosPage } from '../ejercicios/ejercicios';
import { ProfilePage } from '../profile/profile';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = AguaPage;
  tab3Root = BlogPage;
  tab4Root = RecetasPage;
  tab5Root = EjerciciosPage;


	posts: Array<any> = new Array<any>();
  morePagesAvailable: boolean = true;


  categoryId: number;
  categoryTitle: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController) {
}

  ionViewWillEnter() {
  }
}
