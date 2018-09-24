import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';

/**
 * Generated class for the AguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agua',
  templateUrl: 'agua.html',
})
export class AguaPage {
  email;
  nombre;
  user;
  user_id;
  porcentaje;
  myStyles;

  constructor(public navCtrl: NavController,
    public proveedor: PauladroguettProvider,
     public navParams: NavParams, 
     private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    
    this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
              this.user_id = data.user_id;
              this.usersData(2);
      }, 
      error => console.error(error)
    );  
  }

  usersData(action){
    this.proveedor.setLitroxagua(this.user_id, 200, action)
    .subscribe(
      (data)=> {this.porcentaje = data;
  
     
      },
      (error)=> {console.log(error);}
    )
    
  }


}
