import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Http } from '@angular/http';




import { environment } from '../../environment';

@Injectable()
export class AuthenticationService {

  constructor(
    private nativeStorage: NativeStorage,
    public http: Http
  ){} 




  setUser(user){
    return this.nativeStorage.setItem('user', user);
  }
  setCuenta(cuenta){
    return this.nativeStorage.setItem('cuenta', cuenta);
  }
  logOut(){
    return this.nativeStorage.clear();
  }

  doLogin(username, password){
    return this.http.post(environment.urlsite + '/wp-json/simple-jwt-authentication/v1/token',{
      username: username,
      password: password
    })
  }

  doRegister(user_data, token){
    return this.http.post(environment.urlsite  + 'users?token=' + token, user_data);
  }


}
