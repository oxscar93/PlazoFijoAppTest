import { Directive, TemplateRef } from '@angular/core';
import { DialogState } from '../models/dialog-state';

@Directive({
    selector: "[addPlazo]"
  })
  export class PlazoDialogTemplateDirective {
    constructor(PlazoTemplate: TemplateRef<any>, state: DialogState) {
        state.templates["addPlazo"] = PlazoTemplate;
    }
  }