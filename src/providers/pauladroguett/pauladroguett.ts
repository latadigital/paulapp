import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

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

    getPostsACF( post_type){
        return this.http.get(environment.urlsite+'/wp-json/wp/v2/'+ post_type);
    }
    getPostACFid( post_type, id){
        return this.http.get(environment.urlsite+environment.restapiwp + post_type + '/' + id);
    }
   
    setEjercicios(postId, user, comment){
        return new Promise((resolve, reject) => {
        this.http.post(environment.urlsite+environment.restapiwptoken,
            {
                'username': environment.userwp,
                'password': environment.passwp
            },
            ).subscribe((res:any) => {
        var token = res.token;
        let headers = new HttpHeaders({
            'Content-Type' : 'application/json; charset=utf-8' ,
            'Authorization': 'Bearer '+token 
          });
    
         this.http.post(environment.urlsite + environment.restapiwp + "comments?token=" + token, {
            author_name: 'test',
            author_email: 'test@test.cl',
            post: '345',
            content: 'TEST'
        },{ headers })
            .subscribe(data => {
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
        });
      }
    getComments(postId:number, page:number = 1){
        return this.http.get(
            environment.urlsite + environment.restapiwp
          + "comments?post=" + postId
          + '&page=' + page)
        .map(res => res);
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