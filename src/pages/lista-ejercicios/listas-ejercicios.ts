import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the ListasRecetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listas-recetas',
  templateUrl: 'listas-ejercicios.html',
})


export class ListasEjerciciosPage {

  ejercicios
  email;
  nombre;
  id;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public proveedor: PauladroguettProvider,
    private nativeStorage: NativeStorage) {
    this.id = navParams.get('id'); 
  }

  
  ionViewDidLoad() {
    
    this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
      }, 
      error => console.error(error)
    );
    this.proveedor.getPostById('ejercicios',  this.id)
    .subscribe(
      (data)=> {this.ejercicios = data;},
      (error)=> {console.log(error);}
    )

  }
}
