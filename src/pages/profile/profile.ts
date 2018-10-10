import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PautasPage } from '../pautas/pautas';
import { MisEjerciciosSelectPage } from '../mis-ejercicios-select/mis-ejercicios-select';
import { PreguntasFrecuentesPage  } from '../preguntas-frecuentes/preguntas-frecuentes';
import { TerminosCondicionesPage } from '../terminos-condiciones/terminos-condiciones';
import { AuthenticationService } from '../../providers/pauladroguett/authentication.service';
import { NativeStorage } from '@ionic-native/native-storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { ConsultaPage } from '../consulta/consulta';
import { AguaPage } from '../agua/agua';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  email;
  nombre;
  user;
  user_id;
  user_data;
  itemProfile = [];
  myphoto:any;
  porcentaje;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public proveedor: PauladroguettProvider,
     private camera: Camera,
     public authenticationService: AuthenticationService,
     private nativeStorage: NativeStorage) {
      
    this.itemProfile = [
      {
        'title': 'Mi pauta de Alimentos',
        'icon': 'restaurant',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Preguntas Frecuentes',
        'icon': 'help-circle',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'mi selección de Ejercicios',
        'icon': 'bicycle',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'Términos y Condiciones',
        'icon': 'glasses',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
    ]
  }


  
  ionViewDidLoad() {
    this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
              this.user_id = data.user_id;
              this.usersData();
              this.usersAgua();
      }, 
      error => console.error(error)
    );  
  }
  viewAgua(){
    this.navCtrl.push(AguaPage);
    
  }
  viewPautas(){
    this.navCtrl.push(PautasPage);
    
  }

  viewEjercicios(){
    this.navCtrl.push(MisEjerciciosSelectPage);
    
  }

  viewTerminos(){
    this.navCtrl.push(TerminosCondicionesPage);
    
  }
  viewPreguntas(){
    this.navCtrl.push(PreguntasFrecuentesPage);
    
  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight:500,
      targetWidth:500,
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
     this.savePicture(  this.myphoto);

    
    }, (err) => {
     // Handle error
    });

 
  }
  savePicture(foto){
    this.proveedor.saveimagen( this.user_id,  foto).then(
      (data)=> {

            this.usersData();
          },
      (error)=> {
        console.log(error);
        }
      )
  }

  usersData(){
    this.proveedor.getUserData(this.user_id)
    .subscribe(
      (data)=> {this.user_data = data;

        this.authenticationService.setCuenta({ 
          tipocuenta: this.user_data.tipocuenta
        });

      },
      (error)=> {console.log(error);}
    )
    
  }
  usersAgua(){
    //action 2 solo consulta
    this.proveedor.setLitroxagua(this.user_id, 0, 0, 2)
    .subscribe(
      (data)=> {this.porcentaje = data;
  
     
      },
      (error)=> {console.log(error);}
    )
    
  }
  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }

  

}
