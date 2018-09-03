import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationService } from '../../providers/pauladroguett/authentication.service';

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

  error_message: string;
  username;
  password;
  user;

  constructor(public navCtrl: NavController,
               public navParams: NavParams, 
               private authenticationService: AuthenticationService) {
  }

  ionViewDidLoad() {  

  }

  LinkTabsLogin(){
  
  }



  onLogin(){
    this.authenticationService.doLogin(this.username , this.password )
    .subscribe(res => {
      this.authenticationService.setUser({
        token: res.json().token,
        username: this.username,
        displayname: res.json().user_display_name,
        email: res.json().user_email
      });
      
      this.navCtrl.push(TabsPage);
    },
    err => {

      this.error_message = "Invalid credentials. Try with username 'aa' password 'aa'.";
      console.log(err);
    })
    
  }

}
