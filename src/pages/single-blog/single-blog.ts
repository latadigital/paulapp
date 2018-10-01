import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaPage } from '../consulta/consulta';

/**
 * Generated class for the SingleBlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-blog',
  templateUrl: 'single-blog.html',
})
export class SingleBlogPage {

  blog;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.blog = navParams.data.blog;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleBlogPage');
  }

  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }
}
