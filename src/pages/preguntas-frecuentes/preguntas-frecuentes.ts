import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';

/**
 * Generated class for the PreguntasFrecuentesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preguntas-frecuentes',
  templateUrl: 'preguntas-frecuentes.html',
})
export class PreguntasFrecuentesPage {


  faqs
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: PauladroguettProvider) {
  }

  ionViewDidLoad() {
    this.proveedor.obtenerDatosFaqs()
    .subscribe(
      (data)=> {this.faqs = data;},
      (error)=> {console.log(error);}
    )
  }

}
