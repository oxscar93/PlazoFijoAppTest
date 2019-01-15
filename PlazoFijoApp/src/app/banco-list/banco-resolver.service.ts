import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

//import {  BlockUI, NgBlockUI } from 'ng-block-ui';
import { BancoTasa } from './bancoTasa';
import { BancoService } from './banco.service';

 
@Injectable({
  providedIn: 'root',
})
export class BancoResolverService implements Resolve<Array<BancoTasa>> {
  //@BlockUI() blockUI: NgBlockUI;

  constructor(private bancoService: BancoService, private router: Router) {}
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<BancoTasa>> | Observable<never> {
    return this.bancoService.getBancoTasaList().pipe(
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