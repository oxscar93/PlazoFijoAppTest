import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BancoTasa } from './bancoTasa';



@Injectable({
  providedIn: 'root'
 })
export class BancoService {
  constructor(private http:HttpClient) { }

  base = environment.baseServiceUrl;

  getBancoTasaList() : Observable<Array<BancoTasa>>{
    return this.getEntity("/get-banco-tasa-list/",
                            this.extractBancoTasaResponse);
  }

  private getEntity(resource: string, extractDataFunc: any) : Observable<any> {
    return this.http.get(this.base + resource)
       .pipe(map(extractDataFunc))
  }

  private extractBancoTasaResponse(res: any) {
    let result = [];

    res.forEach(element => {
        result.push(new BancoTasa(element.banco, 
                        element.plazo30,
                        element.plazo60, 
                        element.plazo90, 
                        element.plazo365))
    });

    return result;
  }

 
}