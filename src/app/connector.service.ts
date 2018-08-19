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
    let res = this.http.get(
      url,
      {
        params: params
      }
    );

    this.updateToken(res);

    return res;
  }

  public postRequest(url, params): Observable<any> {
    // Process params
    let body = new HttpParams();
    for (let param in params) {
      body = body.set(param,params[param]);
    }
    let res = this.http.post(
      url,
      body
    );

    this.updateToken(res);

    return res;
  }

  private updateToken(res) {
    res.subscribe(data => {
      if (data !== null && data !== undefined) {
        if (data["jwt"] !== undefined) {
          localStorage.setItem("auth", data["jwt"]);
        }
      }
    });

  }

}
