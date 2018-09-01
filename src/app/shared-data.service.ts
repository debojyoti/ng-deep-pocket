import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ConnectorService } from './connector.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public accountData : any;

  // Responses
  public accountsResponse = new Subject<any>();

  constructor(
    private connector : ConnectorService
  ) { }

  public getAccounts() : Observable<any> {
    return this.accountsResponse.asObservable();
  }

  public fetchAccounts() {
    this.connector.postRequest(
      "http://"+window["IP"]+"/private/api/accounts.php",
      {}
    ).subscribe(res => {
      this.accountData = res["accounts"];
      this.accountsResponse.next(res["accounts"]);
    })
  }
}
