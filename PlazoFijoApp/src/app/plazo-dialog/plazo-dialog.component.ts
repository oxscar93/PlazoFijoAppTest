import { Component, OnInit } from '@angular/core';
import { DialogState } from '../models/dialog-state';

@Component({
  selector: 'app-plazo-dialog',
  templateUrl: './plazo-dialog.component.html',
  styleUrls: ['./plazo-dialog.component.css']
})
export class PlazoDialogComponent implements OnInit {

  options: IDialogOptions;

  ngOnInit() {    
    
  }

  constructor(private state: DialogState) {
    this.options = state.options;
  }

  setDefaultData(){

  }

  onCancel() {
    this.state.modal.dismiss('cancel');
  }
}
