import { Component, OnInit } from '@angular/core';
import { BancoService } from './banco.service';
import { ActivatedRoute } from '@angular/router';
import { BancoTasa } from './bancoTasa';

@Component({
  selector: 'app-banco-list',
  templateUrl: './banco-list.component.html',
  styleUrls: ['./banco-list.component.css']
})
export class BancoListComponent implements OnInit {
  bancoTasaList: BancoTasa[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.setDefaultData();
  }

  setDefaultData(){
    this.route.data
    .subscribe((data: { bancoTasaList: Array<BancoTasa> }) => {
      this.bancoTasaList = data.bancoTasaList
    });
  }

}
