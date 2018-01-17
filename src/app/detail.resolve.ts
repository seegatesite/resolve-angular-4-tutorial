import { Injectable } from '@angular/core';
import { Resolve,ActivatedRoute, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ContactService } from './contact.service';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class DetailResolve implements Resolve<any> {
  constructor(private  dataservice: ContactService){}
   resolve(route:ActivatedRouteSnapshot, 
        state:RouterStateSnapshot,
       ): Observable<any> {
    return this.dataservice.getContactDetail( route.queryParams['id']);  
  }
}