import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';



import { environment } from '../../environment';

@Injectable()
export class AuthenticationService {

  constructor(
    public nativeStorage: NativeStorage,
    public http: Http
  ){} 



  getUser(){
    return this.nativeStorage.getItem('User');
  }

  setUser(user){
    return this.nativeStorage.setItem('User', user);
  }

  logOut(){
    return this.nativeStorage.clear();
  }

  doLogin(username, password){
    return this.http.post(environment.urlsite + '/wp-json/jwt-auth/v1/token',{
      username: username,
      password: password
    })
  }

  doRegister(user_data, token){
    return this.http.post(environment.urlsite  + 'users?token=' + token, user_data);
  }


}
