import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Banco } from '../plazo-list/banco';
import { Plazo, PlazoFijo, Ganancia } from './plazo';

@Injectable({
  providedIn: 'root'
 })
export class PlazoService {
  constructor(private http:HttpClient) { }

  base = environment.baseServiceUrl;

  getBancoList() : Observable<Array<Banco>>{
    return this.getEntity("/get-banco-list/",
                            this.extractBancoResponse);
  }

  getPlazoList(bancoId: number) : Observable<Array<Plazo>>{
    return this.getEntity("/get-plazo-list/" + bancoId,
                            this.extractPlazoResponse);
  }

  calculatePlazo(plazoFijo: PlazoFijo) : Observable<Array<Plazo>>{
    return this.postEntity("/calculate-plazo/", plazoFijo,
                            this.extractResultPlazoFijoResponse);
  }

  private getEntity(resource: string, extractDataFunc: any) : Observable<any> {
    return this.http.get(this.base + resource)
       .pipe(map(extractDataFunc))
  }

  private postEntity(resource: string, body: any, extractDataFunc: any) : Observable<any> {
    return this.http.post(this.base + resource, body)
       .pipe(map(extractDataFunc))
  }

  private extractBancoResponse(res: any) {
    let result = [];

    res.forEach(element => {
        result.push(new Banco(element.id, element.banco))
    });

    return result;
  }

  private extractPlazoResponse(res: any) {
    let result = [];

    res.forEach(element => {
        result.push(new Plazo(element.id, element.plazo, element.tasa))
    });

    return result;
  }

  private extractResultPlazoFijoResponse(res: any) {
    return new Ganancia(res.amount, res.diff);
  }
}