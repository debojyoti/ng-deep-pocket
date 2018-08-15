import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req, next) {
    
    let authToken = localStorage.getItem("auth");

    if (authToken !== undefined) {
      let tokenizedReq = req.clone({
        setHeaders : {
          Authorization : "Bearer "+authToken
        }
      });
      return next.handle(tokenizedReq);
    }
    
    return next.handle(req);
  }
}
