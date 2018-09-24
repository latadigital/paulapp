import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment';
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
    getAllPosts( post_type){
        return this.http.get(environment.urlsite+'/wp-json/wp/v2/'+ post_type);
    }
    getPostById( post_type, id){
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


      saveimagen(user_id,  img){

        console.log( "inicio < " + img  + ">FIN");
        console.log( "dentro del servicio");
            return new Promise((resolve, reject) => {
            let headers = new HttpHeaders({
                'Content-Type': 'application/json' 
              });
             this.http.post(environment.urlsite + '/wp-json/user/v1/saveimagen/', {
                user_id: user_id,
                img: img
            },{ headers })
                .subscribe(data => {
                    resolve(data);
                }, (err) => {
                    reject(err);
                });
            
            });
          }
    setSaveEjercicio(username,  postid){
        return this.http.get(
            environment.urlsite + "/wp-json/save_user_postid/v1/products/"
                +postid+"/"+username+
                "?_method=GET")
        .map(res => res);
    }
    getPostEjercicios(username){
        return this.http.get( 
            environment.urlsite + "/wp-json/all_post_by_user/v1/products/"
                +username+
                "?_method=GET")
        .map(res => res);
    }
    getComments(postId:number, page:number = 1){
        return this.http.get(
            environment.urlsite + environment.restapiwp
          + "comments?post=" + postId
          + '&page=' + page)
        .map(res => res);
      }

    getCategorias(){
        return this.http.get(environment.urlsite + environment.restapiwp+'categories');
    }
    getPostTypeByCatId(post_type , id){
        return this.http.get(environment.urlsite + environment.restapiwp+post_type+'/?categories='+id );
    }
   
    obtenerUsuarios(){
        return this.http.get('users/');
    }

    getUserData(user_id){
        return this.http.get( environment.urlsite + '/wp-json/user/v1/getuserdata/'+user_id);
    }
    setLitroxagua(user_id, agua, action){
        return this.http.get( environment.urlsite + '/wp-json/litroxagua/v1/usuario/'+ user_id+'/'+ agua+'/'+action+'?_method=GET');
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