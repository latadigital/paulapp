import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { ConsultaPage } from '../consulta/consulta';

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


  faqs;
  faqs2;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: PauladroguettProvider) {
  }

  ionViewDidLoad() {
    this.getFaqs();
  }
  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }

  getItems(ev: any) {
    
  this.faqs =  this.faqs2 ;
    
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.faqs = this.faqs.filter((item) => {
        return (item.title.rendered.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  getFaqs(){
    this.proveedor.getAllPosts('faqs')
    .subscribe(
      (data)=> {this.faqs = data;
              this.faqs2 = data;
      },
      (error)=> {console.log(error);}
    )
  }
}
