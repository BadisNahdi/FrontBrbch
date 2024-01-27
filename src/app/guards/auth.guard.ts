import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private apiService: ApiService,
    private router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.apiService.getAuthState().pipe(
      tap(value => {
        if (!value) {
          this.router.navigate(['login']).then();
          return false;
        } else {
          return true;
        }
      })
    );
  }

}