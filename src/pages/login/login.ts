import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';

import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  username;
  password;
  user;

  constructor(public navCtrl: NavController, public navParams: NavParams, private proveedor: PauladroguettProvider) {
  }

  ionViewDidLoad() {
    this.proveedor.obtenerUsuarios()
    .subscribe(
      (data)=> {this.user = data;},
      (error)=> {console.log(error);}
    )

  }

  LinkTabsLogin(){
    this.navCtrl.push(TabsPage);
  }

  /*login(){
    console.log("Username: "+ this.username);
    console.log("Password: "+ this.password);
  }*/

  onLogin(){
    console.log(this.username, this.password);
  }

}
