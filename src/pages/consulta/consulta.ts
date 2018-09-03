import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
})
export class ConsultaPage {
  email;
  nombre;
  myphoto:any;
  loggedUser: boolean = false;
  constructor(public navCtrl: NavController, private camera: Camera, public navParams: NavParams,
  
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

    
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  ProfileLink(){
    this.navCtrl.push(ProfilePage);
  }

  ProfileLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

 

}

