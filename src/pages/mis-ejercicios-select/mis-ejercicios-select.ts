import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { NativeStorage } from '@ionic-native/native-storage';
import { ListasEjerciciosPage } from '../lista-ejercicios/listas-ejercicios';
import { AuthenticationService } from '../../providers/pauladroguett/authentication.service';


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
  user_id;
  user_data;
  tipocuenta;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public proveedor: PauladroguettProvider,
    public authenticationService: AuthenticationService,
    private nativeStorage: NativeStorage,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
    this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
              this.username = data.username;
              this.user_id = data.user_id;
              
              this.postUsursEjercicios();
      }, 
      error => console.error(error)
    );
    this.nativeStorage.getItem('cuenta').then(
      data => {
              this.tipocuenta = data.tipocuenta;
              console.log(this.tipocuenta );
              this.usersData();
      }, 
      error => console.error(error)
    );

  }
postUsursEjercicios(){
  this.proveedor.getPostEjercicios(this.username)
  .subscribe(
    (data)=> {this.ejercicios = data;
    },
    (error)=> {console.log(error);}
  )
}
usersData(){
  this.proveedor.getUserData(this.user_id)
  .subscribe(
    (data)=> {this.user_data = data;

      this.authenticationService.setCuenta({ 
        tipocuenta: this.user_data.tipocuenta
      });

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
