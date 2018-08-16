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

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }

  add() {
    let sAcc = new Account();
    
    if (this.verify()) {

    } 

  }

  private verify() {
    // check if type is selected
    if (this.newAccType === undefined) {
      return false;
    } else {
      if (this.newAccType === "bank") {
        if (this.newAccName === undefined) {
          this.formError = "Bank Name cannot be blank";
          return false;
        } else if (this.newAccNo === undefined) {
          this.formError = "Bank Acc No cannot be blank";
          return false;
        } else if (this.newAccBal === undefined) {
          this.formError = "Starting Balance cannot be blank";
          return false;
        } 
        return true;
      } else if (this.newAccType === "homecash") {
        if (this.newAccName === undefined) {
          this.formError = "Name cannot be blank";
          return false;
        } 
        return true;
      } else if (this.newAccType === "fd") {
        if (this.newAccName === undefined) {
          return false;
        } else if (this.newFdMdate === undefined) {
          return false;
        } else if (this.newFdMamount === undefined) {
          return false;
        } 
        return false;
      } else if (this.newAccType === "li") {
        if (this.newAccName === undefined) {
          return false;
        } else if (this.newLiCompany === undefined) {
          return false;
        } else if (this.newLiPno === undefined) {
          return false;
        } else if (this.newLiPmonths === undefined) {
          return false;
        } else if (this.newLiPamount === undefined) {
          return false;
        } else if (this.newLiMdate === undefined) {
          return false;
        } else if (this.newLiHname === undefined) {
          return false;
        } else if (this.newLiMamount === undefined) {
          return false;
        }
        return true;
      }
    }
    
  }

}
