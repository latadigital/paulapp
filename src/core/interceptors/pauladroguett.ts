import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import { environment } from '../../environment';


@Injectable()
export class pauladroguett implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var objinterceptor = {};

        if (req.url.indexOf(environment.restapiwptoken) > -1 ) {
            objinterceptor = {
                url: req.url,
            };
        }else{
            //evitamos cuando sea la creación del usuario no enviar el header autorizacion con token
            if( typeof req.body.action !== 'undefined' ) {
                objinterceptor = {
                    url: environment.urlsite + environment.restapiwp + req.url,
                }
            }else{
                objinterceptor = {
                    url: environment.urlsite + environment.restapiwp + req.url,
                    headers: req.headers.set("Authorization", "test")
                };
            }
        }

        const authReq = req.clone(objinterceptor);

        return next.handle(authReq).catch((error, caught) => {
            return Observable.throw(error);
        });
    }
}