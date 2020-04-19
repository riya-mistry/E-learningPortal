import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route,Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  
  constructor(private router : Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;  
    return this.verifyLogin(url);
}


  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  verifyLogin(url) : boolean{
    if(!this.isLoggedIn()){
        this.router.navigate(['/login']);
        return false;
    }
    else if(this.isLoggedIn()){
        return true;
    }
}
  public isLoggedIn(): boolean{
    let status = false;
    if( localStorage.getItem('isLoggedIn') == "true"){
      status = true;
    }
    else{
      status = false;
    }
    return status;
}
}
