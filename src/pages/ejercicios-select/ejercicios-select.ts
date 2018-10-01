import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { NativeStorage } from '@ionic-native/native-storage';
import { ListasEjerciciosPage } from '../lista-ejercicios/listas-ejercicios';
import { ConsultaPage } from '../consulta/consulta';


/**
 * Generated class for the EjerciciosSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejercicios-select',
  templateUrl: 'ejercicios-select.html',
})
export class EjerciciosSelectPage {
  ejercicios
  email;
  nombre;
  username;
  id;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public proveedor: PauladroguettProvider,
    private nativeStorage: NativeStorage,
    private toastCtrl: ToastController) {
      this.id = navParams.get('id'); 
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
    this.proveedor.getPostTypeByCatId('ejercicios',  this.id)
    .subscribe(
      (data)=> {this.ejercicios = data;},
      (error)=> {console.log(error);}
    )

  }
  singleEjercicios(id){
    console.log(id);
    this.navCtrl.push(ListasEjerciciosPage, { 'id' : id });
  }
  saveEjercicio(id){
    console.log(id);
    this.proveedor.setSaveEjercicio('test',  id)
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

  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }
}
