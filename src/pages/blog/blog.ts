import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SingleBlogPage } from '../single-blog/single-blog';

import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { ConsultaPage } from '../consulta/consulta';
/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  blogs 
  constructor(public navCtrl: NavController, public navParams: NavParams, public proveedor: PauladroguettProvider) {
  }

  

  ionViewDidLoad() {
    this.proveedor.obtenerDatosBlogs()
    .subscribe(
      (data)=> {this.blogs = data;},
      (error)=> {console.log(error);}
    )

  }


  singleBlog(blog){
    this.navCtrl.push(SingleBlogPage, { blog: blog });
  }

  ProfileLink(){
    this.navCtrl.push(ConsultaPage);
  }
}
