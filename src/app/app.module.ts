import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';


import { ConsultaPage } from '../pages/consulta/consulta';
import { AguaPage } from '../pages/agua/agua';
import { BlogPage } from '../pages/blog/blog';
import { RecetasPage } from '../pages/recetas/recetas';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { SingleBlogPage } from '../pages/single-blog/single-blog';
import { ListasRecetasPage } from '../pages/listas-recetas/listas-recetas';
import { ProfilePage } from '../pages/profile/profile';
import { PautasPage } from '../pages/pautas/pautas';
import { EjerciciosSelectPage } from '../pages/ejercicios-select/ejercicios-select';
import { PreguntasFrecuentesPage } from '../pages/preguntas-frecuentes/preguntas-frecuentes';
import { TerminosCondicionesPage } from '../pages/terminos-condiciones/terminos-condiciones';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { SingupPage} from '../pages/singup/singup';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PauladroguettProvider } from '../providers/pauladroguett/pauladroguett';
import { AuthenticationService } from '../providers/pauladroguett/authentication.service';
import {  Headers } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera';
//import { pauladroguett } from '../core/interceptors/pauladroguett';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsultaPage,
    AguaPage,
    BlogPage,
    RecetasPage,
    EjerciciosPage,
    SingleBlogPage ,
    ListasRecetasPage,
    ConsultaPage,
    ProfilePage,
    PautasPage,
    EjerciciosSelectPage,
    PreguntasFrecuentesPage,
    TerminosCondicionesPage,
    LoginPage,
    WelcomePage,
    SingupPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ConsultaPage,
    AguaPage,
    BlogPage,
    RecetasPage,
    EjerciciosPage,
    SingleBlogPage,
    ListasRecetasPage,
    ConsultaPage,
    ProfilePage,
    PautasPage,
    EjerciciosSelectPage,
    PreguntasFrecuentesPage,
    TerminosCondicionesPage ,
    LoginPage,
    WelcomePage,
    SingupPage 
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PauladroguettProvider,
    AuthenticationService,
  ]
})
export class AppModule {
  
}


