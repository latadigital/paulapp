import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { AguaPage } from '../agua/agua';
import { ConsultaPage } from '../consulta/consulta';

/**
 * Generated class for the AguaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agua-interior',
  templateUrl: 'agua-interior.html',
})
export class AguaInteriorPage {
  email;
  nombre;
  user;
  user_id;
  porcentaje;
  litrosUsuarios;
  aguaconsumida;

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
              this.litrosusuarios();
      }, 
      error => console.error(error)
    );  
  }

  aguaUser(action){
    this.proveedor.setLitroxagua(this.user_id, this.aguaconsumida, this.litrosUsuarios,action)
    .subscribe(
      (data)=> {  this.porcentaje = data;
  
     
          this.navCtrl.push(AguaPage, { 'porcentaje' : this.porcentaje });
        
      },
      (error)=> {console.log(error);}
    )
    
  }

  litrosusuarios(){
    this.proveedor.setLitroxagua(this.user_id, 0, 0,3)
    .subscribe(
      (data)=> {  this.litrosUsuarios = data;
  
     

        
      },
      (error)=> {console.log(error);}
    )
    
  }
  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }

}
