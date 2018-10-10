import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { NativeStorage } from '@ionic-native/native-storage';
import { ConsultaPage } from '../consulta/consulta';


/**
 * Generated class for the PautasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pautas',
  templateUrl: 'pautas.html',
})
export class PautasPage {

  pautas
  email;
  nombre;
  id;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public proveedor: PauladroguettProvider,
    private nativeStorage: NativeStorage
  ) {
  }

  
  ionViewDidLoad() {
    
    this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
      }, 
      error => console.error(error)
    );
    this.proveedor.getAllPosts('pautas')
    .subscribe(
      (data)=> {this.pautas = data;},
      (error)=> {console.log(error);}
    )

  }
  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }

}
