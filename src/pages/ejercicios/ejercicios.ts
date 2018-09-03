import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { NativeStorage } from '@ionic-native/native-storage';
import { EjerciciosSelectPage } from '../ejercicios-select/ejercicios-select';
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
  email;
  nombre;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public proveedor: PauladroguettProvider,
    private nativeStorage: NativeStorage) {
  }


  ionViewDidLoad() {
    this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
      }, 
      error => console.error(error)
    );
    this.proveedor.getPostsACF('ejercicios')
    .subscribe(
      (data)=> {this.ejercicios = data; 
      
        this.ejercicios.forEach(childObj=> {
          if(childObj.acf.usuarios.user_email == this.email){

            console.log(childObj.acf.usuarios.user_email + this.email);
          }
  
            

         })
      
      },
      (error)=> {console.log(error);}
    )

  }
  singleEjercicios(id){
    console.log(id);
    this.navCtrl.push(EjerciciosSelectPage , { 'id' : id });
  }


}
