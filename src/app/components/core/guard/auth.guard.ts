import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log(this.authService.isUserLoggedIn);
    if (this.authService.isUserLoggedIn()) 
      return true;
      //this.router.navigate(['login']);
    this.router.navigate(['/authentication/signin']);
    return false;
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.authService.isUserLoggedIn())
  //     return true;
  //   this.router.navigate(['login']);
  //   return false;
  // }
}
