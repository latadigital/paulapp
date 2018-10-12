import { Component } from '@angular/core';
import {  NavController, NavParams, ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  email;
  nombre;
  user_id;
  myphoto:any;
  public user : FormGroup;
  data;
  user_data;
  altura: string = "My Default Text";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder,
              public proveedor: PauladroguettProvider, 
              private nativeStorage: NativeStorage,
              public toastCtrl: ToastController,

          ) {
      this.user = this.formBuilder.group({
        diagnostico: ['', Validators.required],
          peso: ['', Validators.required],
          altura: ['', Validators.required],
          edad: ['', Validators.required],
          descripcion: ['', Validators.required],
          accion: ['', Validators.required],    
      });
      
  }
  
  ionViewDidLoad() {
    this.nativeStorage.getItem('user').then(
      data => {
              this.email = data.email;
              this.nombre = data.displayname;
              this.user_id = data.user_id;
              this.usersData();
             
      }, 
      error => console.error(error)
    );
  }


  save(){
    this.proveedor.saveDataUser(this.user, 9, 2).then((data) => {
      this.data = data;
        const toast = this.toastCtrl.create({
            message: 'Datos guardados con éxito',
            duration: 3000,
            cssClass: 'success',
            position: 'top'
        });
        toast.present();
        this.usersData();
    }, (error) => {
        const toast = this.toastCtrl.create({
            message: error.error.message,
            duration: 3000,
            cssClass: 'danger',
            position: 'top'
        });
        toast.present();
    });
}

usersData(){
    this.proveedor.getUserData(this.user_id)
    .subscribe(
      (data)=> {this.user_data = data;
         
      },
      (error)=> {console.log(error);}
    )
    
  }

}

