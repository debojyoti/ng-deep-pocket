import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Account } from '../classes/account';


@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  /*  Properties for new account */
  @Input() newAccType;
  @Input() newAccName;
  @Input() newAccNo;
  @Input() newAccBal;
  @Input() newFdMdate;
  @Input() newFdMamount;
  @Input() newLiCompany;
  @Input() newLiPno;
  @Input() newLiHname;
  @Input() newLiMdate;
  @Input() newLiMamount;
  @Input() newLiPamount;
  @Input() newLiPmonths;

  public formError;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  add() {
    let sAcc = new Account();
    let params;
    if (this.verify()) {
      switch (this.newAccType) {
        case "bank":
          params = {
            action : "add",
            type : "bank",
            name : this.newAccName,
            accNumber : this.newAccNo,
            balance : this.newAccBal
          }
          console.log(params);
          break;
        
        case "homecash":
          params = {
            action : "add",
            type : "homecash",
            name : this.newAccName,
            balance : this.newAccBal
          }
          console.log(params);
          break;

        case "fd":
          params = {
            action : "add",
            type : "bank",
            name : this.newAccName,
            accNumber : this.newAccNo,
            balance : this.newAccBal
          }
          console.log(params);
          break;

        case "li":
          params = {
            action : "add",
            type : "bank",
            name : this.newAccName,
            accNumber : this.newAccNo,
            balance : this.newAccBal
          }
          console.log(params);
          break;
      }
    } 

  }

  private verify() {
    // check if type is selected
    if (this.newAccType === undefined || this.newAccType ==="" ) {
      return false;
    } else {
      if (this.newAccType === "bank") {
        if (this.newAccName === undefined || this.newAccName ==="" ) {
          this.formError = "Bank Name cannot be blank";
          return false;
        } else if (this.newAccNo === undefined || this.newAccNo ==="" ) {
          this.formError = "Bank Acc No cannot be blank";
          return false;
        } else if (this.newAccBal === undefined || this.newAccBal ==="" ) {
          this.formError = "Starting Balance cannot be blank";
          return false;
        } 
        this.formError = "";
        return true;
      } else if (this.newAccType === "homecash") {
        if (this.newAccName === undefined || this.newAccName ==="" ) {
          this.formError = "Name cannot be blank";
          return false;
        } else if (this.newAccBal === undefined || this.newAccBal ==="" ) {
          this.formError = "Starting Balance cannot be blank";
          return false;
        } 
        this.formError = "";
        return true;
      } else if (this.newAccType === "fd") {
        if (this.newAccName === undefined || this.newAccName ==="" ) {
          this.formError = "Account Name cannot be blank";
          return false;
        } else if (this.newFdMdate === undefined || this.newFdMdate ==="" ) {
          this.formError = "Maturity date cannot be blank";
          return false;
        } else if (this.newFdMamount === undefined || this.newFdMamount ==="" ) {
          this.formError = "Maturity amount cannot be blank";
          return false;
        } 
        return true;
      } else if (this.newAccType === "li") {
        if (this.newAccName === undefined || this.newAccName ==="" ) {
          this.formError = "Name cannot be blank";
          return false;
        } else if (this.newLiCompany === undefined || this.newLiCompany ==="" ) {
          this.formError = "Company name cannot be blank";
          return false;
        } else if (this.newLiPno === undefined || this.newLiPno ==="" ) {
          this.formError = "Policy Number cannot be blank";
          return false;
        } else if (this.newLiPmonths === undefined || this.newLiPmonths ==="" ) {
          this.formError = "Policy months cannot be blank";
          return false;
        } else if (this.newLiPamount === undefined || this.newLiPamount ==="" ) {
          this.formError = "Premium amount cannot be blank";
          return false;
        } else if (this.newLiMdate === undefined || this.newLiMdate ==="" ) {
          this.formError = "Maturity date cannot be blank";
          return false;
        } else if (this.newLiHname === undefined || this.newLiHname ==="" ) {
          this.formError = "Holder name cannot be blank";
          return false;
        } else if (this.newLiMamount === undefined || this.newLiMamount ==="" ) {
          this.formError = "Maturity amount cannot be blank";
          return false;
        }
        this.formError = "";
        return true;
      }
    }
    
  }

}
