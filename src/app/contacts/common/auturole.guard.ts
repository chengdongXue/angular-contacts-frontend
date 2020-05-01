import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuturoleGuard implements CanActivate {
  constructor (private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let autoToken = window.localStorage.getItem('auth_token');
      let userInfo = JSON.parse(window.localStorage.getItem('user_info'));
      if (!autoToken && !userInfo) {
        this.router.navigate(['/signin']);
        return false;
      }
    return true;
  }
}
