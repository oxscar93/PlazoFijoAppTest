import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BancoListComponent } from './banco-list/banco-list.component';
import { PlazoListComponent } from './plazo-list/plazo-list.component';
import { DialogState } from './models/dialog-state';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlazoDialogService } from './plazo-dialog/plazo-dialog.service';
import { PlazoDialogTemplateDirective } from './plazo-dialog/plazo-dialog.directive';
import { PlazoDialogComponent } from './plazo-dialog/plazo-dialog.component';
import { BancoService } from './banco-list/banco.service';
import { PlazoService } from './plazo-list/plazo.service';
import { NumericDirective } from './directives/numeric.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BancoListComponent,
    PlazoListComponent,
    PlazoDialogComponent,
    PlazoDialogTemplateDirective,
    NumericDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    PlazoDialogTemplateDirective,
   ],
  providers: [DialogState, PlazoDialogService, BancoService, PlazoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
