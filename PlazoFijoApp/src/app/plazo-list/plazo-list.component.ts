import { Component, OnInit } from '@angular/core';
import { Plazo, PlazoFijo } from './plazo';
import { ActivatedRoute } from '@angular/router';
import { Banco } from './banco';
import { PlazoService } from './plazo.service';
import { PlazoDialogService } from '../plazo-dialog/plazo-dialog.service';

@Component({
  selector: 'app-plazo-list',
  templateUrl: './plazo-list.component.html',
  styleUrls: ['./plazo-list.component.css']
})
export class PlazoListComponent implements OnInit {
  bancoList: Banco[];
  plazoList: Plazo[];
  plazoFijo: PlazoFijo;

  constructor(private route: ActivatedRoute, 
              private plazoService: PlazoService, 
              private plazoDialog: PlazoDialogService) { }

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData(){
    this.route.data
    .subscribe((data: { bancoList: Array<Banco> }) => {
      this.bancoList = data.bancoList
    });

    this.plazoFijo = new PlazoFijo(); 
    this.plazoList = []
  }

  getPlazoList(bancoId:number){
    this.plazoService.getPlazoList(bancoId)
                      .subscribe((result) => {
                        this.plazoList = result
                    });
  }

  calculatePlazo(valid:boolean){
    if (valid){
      this.plazoService.calculatePlazo(this.plazoFijo) 
                        .subscribe((result) => {
                          this.plazoDialog.addPlazo({message: "", 
                                                      title: "",
                                                      obj: result})
                        });
    }
  }

}
