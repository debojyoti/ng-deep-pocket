import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() loginEmail;
  @Input() password = "";
  @Input() signupEmail;

  public loginState;
  public signupState;
  public errorMsg = "";

  constructor(
    private router: Router,
    private connector : ConnectorService
  ) { }

  ngOnInit() {
    this.router.navigate(["/dashboard"]);
    // First check if token is present
    if (!!localStorage.getItem("auth")) {
     // this.router.navigate(["/dashboard"]);
   }
  }

  public login() {
    if (this.validateEmail()) {
      if (this.validatePassword()) {
        let loginParams = {
          email : this.loginEmail,
          password : this.password
        }
        this.connector.postRequest("http://"+window["IP"]+"private/api/login.php", loginParams).subscribe(res => {
          this.connector.updateToken(res);
          if (!!localStorage.getItem("auth")) {
            this.router.navigate(["/dashboard"]);
          } else {
            // No matching accounts
            alert("No matching accounts!");
          }
        });
      }
    }
  }

  private validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(this.loginEmail).toLowerCase())) {
      this.errorMsg = "";
      return true;
    }
    this.errorMsg = "Invalid Email";
    return false;
  }

  private validatePassword() {
    if (this.password.length < 6) {
      this.errorMsg = "Invalid Password";
      return false;
    } 
    this.errorMsg = "";
    return true;
  }

}
