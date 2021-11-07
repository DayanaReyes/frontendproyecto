import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilidadesService } from '../servicios/utilidades.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router:Router, private utils:UtilidadesService){}
  
  
canActivate(route: ActivatedRouteSnapshot,
state: RouterStateSnapshot) {
  try {
    if(route.data.persona==this.utils.obtenerSesion()){
      return true
    }
    this.router.navigate(['/home']);
    return false
  } catch (error) {
    this.router.navigate(['/home']);
    return false
  }
  }
  
}
