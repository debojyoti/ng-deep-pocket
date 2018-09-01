import { Component, OnInit, ViewChild, Input } from '@angular/core';
import * as Chartist from 'chartist';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material';
import { SharedDataService } from '../shared-data.service';
import { ConnectorService } from '../connector.service';
declare var $: any;
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  @ViewChild(MatAutocomplete) autocomplete: MatAutocomplete;

  @Input() transactionAccount;
  @Input() transactionAmount;
  @Input() transactionReason;
  @Input() transactionDate;

  public accounts;

  private subscription;
  public errorMsg;

  constructor(
    private sharedData : SharedDataService,
    private connector : ConnectorService,
    private http : HttpClient
  ) { }

  ngOnInit() {
    let res = this.sharedData.getAccounts().subscribe(res => {
      if (res !== undefined && res !== null) {
        this.processAccounts(res);
      }
    });
    this.sharedData.fetchAccounts();
  }

  private processAccounts(data) {
    this.accounts = [];
    for (let key in data) {
      console.log(key);
      if (key === "banks") {
        data["banks"].forEach(bank => {
          let identifier = bank.name.split(" ")[0] + " " + bank.holder_name.split(" ")[0];
          this.accounts.push({
            identifier : identifier,
            id : bank.id
          });
        });
      }
      if (key === "homecash") {
        data["homecash"].forEach(hc => {
          let identifier = hc.name.split(" ")[0] + " " + hc.current_balance;
          this.accounts.push({
            identifier : identifier,
            id : hc.id
          });
        });
      }
    }
  }

  public credit() {
    if (this.validateTransactionField()) {
      let params = {
        action : "credit",
        account : this.transactionAccount,
        amount : this.transactionAmount,
        reason : this.transactionReason,
        time : this.transactionDate
      }
      console.log(params);
      this.connector.postRequest(
        "http://"+window["IP"]+"/private/api/transaction.php",
        params
      ).subscribe(res => {
        if (res !== undefined && res !== null) {
          let identifier;
          this.accounts.forEach(element => {
            if (element["id"] === this.transactionAccount) {
              identifier = element["identifier"];
            }
          });
          this.connector.updateToken(res);
          if (res["status"]) {
            $.notify({
              icon: "notifications",
              message: "Recorded Successfully!</br> Rs "+this.transactionAmount+" is credited to "+identifier
          },{
              type: "success",
              timer: 4000,
              placement: {
                  from: "top",
                  align: "right"
              }
          });
            this.clearTransactionForm();
          }
        }
      });
    }
  }

  public debit() {
    if (this.validateTransactionField()) {
      let params = {
        action : "debit",
        account : this.transactionAccount,
        amount : this.transactionAmount,
        reason : this.transactionReason,
        time : this.transactionDate
      }
      console.log(params);
      this.connector.postRequest(
        "http://"+window["IP"]+"/private/api/transaction.php",
        params
      ).subscribe(res => {
        if (res !== undefined && res !== null) {
          this.connector.updateToken(res);
          if (res["status"]) {
            let identifier;
            this.accounts.forEach(element => {
              if (element["id"] === this.transactionAccount) {
                identifier = element["identifier"];
              }
            });
            $.notify({
              icon: "notifications",
              message: "Recorded Successfully!</br> Rs "+this.transactionAmount+" is debited from "+identifier
          },{
              type: "success",
              timer: 4000,
              placement: {
                  from: "top",
                  align: "right"
              }
          });
            this.clearTransactionForm();
          }
        }
      });
    }
  }

  private clearTransactionForm() {
    this.transactionAccount = "";
    this.transactionAmount = "";
    this.transactionDate = "";
    this.transactionReason = "";
  }

  private validateTransactionField() {
    if (this.transactionAccount === "" || this.transactionAccount === undefined) {
      this.errorMsg = "Select an account";
      return false;
    } else if (this.transactionDate === "" || this.transactionDate === undefined) {
      this.errorMsg = "Select a date";
      return false;
    } else if (this.transactionAmount === "" || this.transactionAmount === undefined) {
      this.errorMsg = "Amount cannot be blank";
      return false;
    } else if (this.transactionReason === "" || this.transactionReason === undefined) {
      this.errorMsg = "Reason cannot be blank";
      return false;
    }
    this.errorMsg = "";
    return true;
  }

}
