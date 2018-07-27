import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  ListaRecetas: Array<any> = [
    {
      titulo: "Pollo con Arroz",
    },
    {
      titulo: "Pollo con Arroz",
    },
    {
      titulo: "Pollo con Arroz",
    },
    {
      titulo: "Pollo con Arroz",
    },
    {
      titulo: "Pollo con Arroz",
    },
    {
      titulo: "Pollo con Arroz",
    },
    {
      titulo: "Pollo con Arroz",
    },
    {
      titulo: "Pollo con Arroz",
    },
    {
      titulo: "Pollo con Arroz",
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListasRecetasPage');
  }
}
