import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

//import {  BlockUI, NgBlockUI } from 'ng-block-ui';
import { Banco } from './banco';
import { PlazoService } from './plazo.service';

 
@Injectable({
  providedIn: 'root',
})
export class PlazoResolverService implements Resolve<Array<Banco>> {
  //@BlockUI() blockUI: NgBlockUI;

  constructor(private plazoService: PlazoService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Banco>> | Observable<never> {
    return this.plazoService.getBancoList().pipe(
      mergeMap(bancoList => {
        if (bancoList) { 
          return of(bancoList);
        } else { 
          return EMPTY;
        }
      })
    );
  }
}