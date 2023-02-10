import { Injectable} from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from "@angular/common/http";
import {Observable} from "rxjs";

//HttpInterceptor ha un intercept() metodo per ispezionare e trasformare le richieste http prima che vengano inviate al server
//implementa HttpInterceptor e aggiungiamo withCredentials true per fa in modo che il browser includa un cookiie nell'intestazione della richiesta

@Injectable()
export class HttpRequestIntercepotor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({withCredentials: true});
    return next.handle(req);
  }//intercept ottiene l'oggetto httpRequest, lo modifica e lo inoltra al metodo httpHandler.
   //handle(req) trasforma httpRequest oggetto in un file Observable<httpEvents>, next rappresenta l'ultimo intercettore
}


