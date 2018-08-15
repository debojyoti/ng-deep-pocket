import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private router : Router
  ) {}
  
  canActivate() {
    if (!localStorage.getItem("auth")) {
      // Token not available
      this.router.navigate(["/login"]);
    } else {
      return true;
    }
  }
}
