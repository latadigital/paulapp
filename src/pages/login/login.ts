import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationService } from '../../providers/pauladroguett/authentication.service';

import { TabsPage } from '../tabs/tabs';
import { NativeStorage } from '@ionic-native/native-storage';


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

  error_message: string;
  username;
  password;
  user;

  constructor(public navCtrl: NavController,
               public navParams: NavParams, 
               private authenticationService: AuthenticationService,
               private nativeStorage: NativeStorage) {
  }

  ionViewDidLoad() {
    this.nativeStorage.getItem('user').then(
      data => {
              if(data.email){
                  this.navCtrl.push(TabsPage);
              }

      }, 
      error => console.error(error)
    );  
  }

  LinkTabsLogin(){
  
  }



  onLogin(){
    this.authenticationService.doLogin(this.username , this.password )
    .subscribe(res => {
      this.authenticationService.setUser({
        token: res.json().token,
        username: res.json().user_nicename,
        displayname: res.json().user_display_name,
        email: res.json().user_email,
        user_id: res.json().user_id
      });
      
      this.navCtrl.push(TabsPage);
    },
    err => {

      this.error_message = "Usuario o contraseña incorrecto, favor intenta nuevamente";
      console.log(err);
    })
    
  }

}
