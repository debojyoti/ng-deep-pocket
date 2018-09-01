import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(
    private http: HttpClient
  ) { }

  public getRequest(url, params = null): Observable<any> {
    return this.http.get(
      url,
      {
        params: params
      }
    );
  }

  public postRequest(url, params): Observable<any> {
    // Process params
    let body = new HttpParams();
    for (let param in params) {
      body = body.set(param, params[param]);
    }
    return this.http.post(
      url,
      body
    );
  }

  public updateToken(data) {
    console.log("connector post");
    if (data !== null && data !== undefined) {
      if (data["jwt"] !== undefined) {
        localStorage.setItem("auth", data["jwt"]);
      }
    }
  }
}
