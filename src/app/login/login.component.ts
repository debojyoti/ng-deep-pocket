import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('myAnimation', [
      state('goBack', style({
        "position": "absolute",
        "top": "35px",
        "left": "190px",
        "height": "320px",
        "background-color": "white",
        "box-shadow": "0px 0px 50px rgba(0, 0, 0, 0.3)",
        "width": "44%"
      })),
      state("goFront", style({
        "position": "absolute",
        "height": "400px",
        "background-color": "white",
        "box-shadow": "0px 0px 50px rgba(0, 0, 0, 0.3)",
        "z-index": "999"
      })),
      transition("goBack => goFront", animate('100ms ease-in')),
      transition("goFront => goBack", animate('100ms ease-out')),
    ])
  ]
})
export class LoginComponent implements OnInit {
  loginState;
  signupState;
  @Input() loginEmail;
  @Input() signupEmail;
  constructor() { }

  ngOnInit() {
    this.loginState = "goBack";
    this.signupState = "goFront";
    setTimeout(() => {
      this.loginState = "goFront";
      this.signupState = "goBack";
    }, 1000);
  }

  toggle(card) {
    if (card == "login") {
      if (this.loginState == "goBack") {
        this.loginState = "goFront";
        this.signupState = "goBack";
        this.loginEmail = this.signupEmail;
      }
    } else if (card == "signup") {
      if (this.signupState == "goBack") {
        this.loginState = "goBack";
        this.signupState = "goFront";
        this.signupEmail = "";
      }
    }
  }

}
