import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListasRecetasPage } from '../listas-recetas/listas-recetas';

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


  TypeRecetas: Array<any> = [

    {
      titulo: "Ayuna",
      imgRecetas: "assets/img/recetas/01.jpg",

    },
    {
      titulo: "Almuerzo",
      imgRecetas: "assets/img/recetas/02.jpg",
    },
    {
      titulo: "cena",
      imgRecetas: "assets/img/recetas/03.jpg",
    },
    {
      titulo: "Eventos Especiales",
      imgRecetas: "assets/img/recetas/04.jpg",
    },
  ]


  


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  singleReceta(){
    this.navCtrl.push(ListasRecetasPage);
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecetasPage');
  }

}
