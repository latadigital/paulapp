import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PauladroguettProvider } from '../../providers/pauladroguett/pauladroguett';
import { ToastController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@IonicPage()
@Component({
    selector: 'page-singup',
    templateUrl: 'singup.html',
})
export class SingupPage {
    public user : FormGroup;

    constructor(public navCtrl: NavController, 
                public navParams: NavParams, 
                private formBuilder: FormBuilder,
                private provider: PauladroguettProvider,
                public toastCtrl: ToastController
            ) {
        this.user = this.formBuilder.group({
            name: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            rut: ['', Validators.required],
            password: ['', Validators.required],
            rpassword: ['', Validators.required],
        }, {
            validator: this.matchingPasswords('password', 'rpassword')
        });
    }
    
    ionViewDidLoad() {
    }

    LinkTabsSingup(){
        this.navCtrl.push(TabsPage);
    }

    register(){
        this.provider.crearUsuario(this.user).then((data) => {
            const toast = this.toastCtrl.create({
                message: 'Usuario ha sido creado con éxito',
                duration: 3000,
                cssClass: 'success',
                position: 'top'
            });
            toast.present();
            this.navCtrl.push(WelcomePage);
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

    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[confirmPasswordKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
    }
}


