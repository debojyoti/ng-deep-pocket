import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let res = this.http.post(
      url,
      {
        params: params
      }
    );

    this.updateToken(res);

    return res;
  }

  private updateToken(res) {
    res.subscribe(data => {
      if (data["auth"] !== undefined) {
        localStorage.setItem("auth", data["auth"]);
      }
    });

  }

}
