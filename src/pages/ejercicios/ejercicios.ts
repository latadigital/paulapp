import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { EjerciciosSelectPage } from '../ejercicios-select/ejercicios-select';
import { ProfilePage } from '../profile/profile';
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

  categorias;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public proveedor: PauladroguettProvider) {
  }


  ionViewDidLoad() {
    this.proveedor.getCategorias()
    .subscribe(
      (data)=> {this.categorias = data;},
      (error)=> {console.log(error);}
    )

  }
  
  singleEjercicios(id){
    console.log(id);
    this.navCtrl.push(EjerciciosSelectPage , { 'id' : id });
  }

  ProfileLink(){
    this.navCtrl.push(ProfilePage);
  }
}
