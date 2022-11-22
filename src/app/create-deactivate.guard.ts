import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateComponent } from './create/create.component';

@Injectable({
  providedIn: 'root'
})
export class CreateDeactivateGuard implements CanDeactivate<CreateComponent> {
  canDeactivate(
    component: CreateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean{ 
    if(component.isDirty || component.isValid) {
      return window.confirm('Are you sure you want to leave this page?');
    }
    return false;
  }
  
}
