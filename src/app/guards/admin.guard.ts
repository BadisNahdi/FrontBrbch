import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private apiService: ApiService,
    private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.apiService.getUser().pipe(
      map(user => {
        return user.roles === 'Admin';
      })
    )
  }

}