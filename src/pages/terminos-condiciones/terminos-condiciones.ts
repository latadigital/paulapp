import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaPage } from '../consulta/consulta';

/**
 * Generated class for the TerminosCondicionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terminos-condiciones',
  templateUrl: 'terminos-condiciones.html',
})
export class TerminosCondicionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminosCondicionesPage');
  }

  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }
}
