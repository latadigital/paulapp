import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';


/**
 * Generated class for the EjerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejercicios',
  templateUrl: 'ejercicios.html',
})
export class EjerciciosPage {

  ejercicios
  abdomenes
  Catbrazos

  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: PauladroguettProvider) {
  }


  ionViewDidLoad() {
    this.proveedor.obtenerDatosEjercicios()
    .subscribe(
      (data)=> {this.ejercicios = data;},
      (error)=> {console.log(error);}
    ),

    this.proveedor.obtenerDatosCategoriasAbdomen()
    .subscribe(
      (data)=> {this.abdomenes = data;},
      (error)=> {console.log(error);}
    ),

    this.proveedor.obtenerDatosCategoriasBrazos()
    .subscribe(
      (data)=> {this.Catbrazos = data;},
      (error)=> {console.log(error);}
    )

  }
  

}
