import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from "../app/service/storage.service";
import { API_CONFIG } from "../config/api.config";




@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(public storage: StorageService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        let api = API_CONFIG.baseUrl.length;
        let requestToApi = req.url.substring(0,api) == API_CONFIG.baseUrl;

        let localUser = this.storage.getLocalUser();
        if(localUser && requestToApi){
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
            return next.handle(authReq);
        }
        else{
            return next.handle(req)
        }              

    }
}
export const AuthInterceptorProvider ={
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
}; 