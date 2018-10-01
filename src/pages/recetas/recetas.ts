import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListasRecetasPage } from '../listas-recetas/listas-recetas';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { ConsultaPage } from '../consulta/consulta';

/**
 * Generated class for the RecetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recetas',
  templateUrl: 'recetas.html',
})
export class RecetasPage {


  recetas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: PauladroguettProvider) {
  }

  ionViewDidLoad() {
    this.proveedor.getAllPosts('recetas')
    .subscribe(
      (data)=> {this.recetas = data;},
      (error)=> {console.log(error);}
    )

  }

  singleReceta(recetas){
    this.navCtrl.push(ListasRecetasPage, { recetas: recetas });
  }

  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }



}
