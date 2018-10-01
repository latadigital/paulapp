import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaPage } from '../consulta/consulta';

/**
 * Generated class for the ListasRecetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listas-recetas',
  templateUrl: 'listas-recetas.html',
})


export class ListasRecetasPage {

  recetas;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recetas = navParams.data.recetas;
    console.log(this.recetas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad recetas');
  }

  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }
}
