import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PautasPage } from '../pautas/pautas';
import { EjerciciosSelectPage } from '../ejercicios-select/ejercicios-select';
import { PreguntasFrecuentesPage  } from '../preguntas-frecuentes/preguntas-frecuentes';
import { TerminosCondicionesPage } from '../terminos-condiciones/terminos-condiciones';
import { AuthenticationService } from '../../providers/pauladroguett/authentication.service';
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

  
  itemProfile = [];
  loggedUser: boolean = false;

  

  
  constructor(public navCtrl: NavController, public navParams: NavParams,  private authenticationService: AuthenticationService) {

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

  viewPautas(){
    this.navCtrl.push(PautasPage);
    
  }

  viewEjercicios(){
    this.navCtrl.push(EjerciciosSelectPage);
    
  }

  viewTerminos(){
    this.navCtrl.push(TerminosCondicionesPage);
    
  }
  viewPreguntas(){
    this.navCtrl.push(PreguntasFrecuentesPage);
    
  }

  ionViewWillEnter() {
    let user: any;
    this.authenticationService.getUser()
    .then(
      res => user = res,
      error => this.loggedUser = false
    );
    console.log(this.loggedUser);
  }

}
