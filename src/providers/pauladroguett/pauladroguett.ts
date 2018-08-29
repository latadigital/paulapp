import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';

@Injectable()
export class PauladroguettProvider {
    constructor(public http: HttpClient) {
    }

    obtenerDatosBlogs(){
        return this.http.get(environment.urlsite+environment.restapiwp + 'noticias'); 
 
    }

    obtenerDatosFaqs(){
        return this.http.get('faqs'); 
    }

    obtenerDatosEjercicios(){
        return this.http.get('ejercicios');
    }

    obtenerDatosCategoriasAbdomen(){
        return this.http.get('categories/16');
    }

    obtenerDatosCategoriasBrazos(){
        return this.http.get('categories/13');
    }

    obtenerDatosCategoriasCara(){
        return this.http.get('categories/14');
    }

    obtenerDatosCategoriasCuerpo(){
        return this.http.get('categories/17');
    }

    obtenerDatosCategoriasGluteos(){
        return this.http.get('categories/15');
    }

    obtenerUsuarios(){
        return this.http.get('users/');
    }

    crearUsuario( userObj ) {
        return new Promise((resolve, reject) => {
            // iniciamos sesion cuando no este para utilizar la rest api
            this.http.post(environment.urlsite+environment.restapiwptoken,
            {
                'username': environment.userwp,
                'password': environment.passwp
            },
            ).subscribe((res:any) => {
                var token = res.token;
                this.http.post(environment.urlsite+environment.restapiwp+'users',
                    {
                        'username': userObj.value.username,
                        'password': userObj.value.rpassword,
                        'name': userObj.value.name,
                        'first_name': userObj.value.name,
                        'email': userObj.value.email,
                        'roles': ['contributor'],
                        'action': 'create'
                    },
                    {'headers': { 'Authorization': 'Bearer '+token }}
                ).subscribe(data => {
                    resolve(data);
                }, (err) => {
                    reject(err);
                });
            });
            
        });
    }

  //http://pauladroguett.cl/wp-json/wp/v2/ejercicios?categories=16 Todos los post de esa categoria 
}