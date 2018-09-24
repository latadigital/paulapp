import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { NativeStorage } from '@ionic-native/native-storage';
import { ListasEjerciciosPage } from '../lista-ejercicios/listas-ejercicios';


/**
 * Generated class for the EjerciciosSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-ejercicios-select',
  templateUrl: 'mis-ejercicios-select.html',
})
export class MisEjerciciosSelectPage {
  ejercicios;
  email;
  nombre;
  username;
  id;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public proveedor: PauladroguettProvider,
    private nativeStorage: NativeStorage,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
    this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
              this.username = data.username;
      }, 
      error => console.error(error)
    );
    this.proveedor.getPostEjercicios(this.username)
    .subscribe(
      (data)=> {this.ejercicios = data;
      },
      (error)=> {console.log(error);}
    )
  }
  singleEjercicios(id){
    console.log(id);
    this.navCtrl.push(ListasEjerciciosPage, { 'id' : id });
  }
  daleteEjercicio(id){
    console.log(id);
    this.proveedor.setSaveEjercicio('test',  this.id)
    .subscribe(
      (data)=> {

        let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      },
      (error)=> {console.log(error);}
    )

  }
}
