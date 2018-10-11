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
  tipocuenta;

  constructor(public navCtrl: NavController,
    public proveedor: PauladroguettProvider,
     public navParams: NavParams, 
     private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    this.user_id = 9;
    this.litrosusuarios(3);
    /*this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
              this.user_id = data.user_id;
              
      }, 
      error => console.error(error)
    );*/
    this.nativeStorage.getItem('cuenta').then(
      data => {
              this.tipocuenta = data.tipocuenta;
              console.log(this.tipocuenta );
              if(this.tipocuenta == "pagado"){
                this.litrosusuarios(4);
              }else{
                this.litrosusuarios(3);
              }
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

  litrosusuarios(accion){
    this.proveedor.setLitroxagua(this.user_id, 0, 0,accion)
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
