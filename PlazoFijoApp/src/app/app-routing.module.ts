import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BancoListComponent } from './banco-list/banco-list.component';
import { PlazoListComponent } from './plazo-list/plazo-list.component';
import { PlazoResolverService } from './plazo-list/plazo-resolver.service';
import { BancoResolverService } from './banco-list/banco-resolver.service';

const routes: Routes = [{ path: 'banco-list', component: BancoListComponent,
                          resolve: {bancoTasaList: BancoResolverService}},
                        { path: 'calculate-plazo', component: PlazoListComponent, 
                          resolve: {bancoList: PlazoResolverService}},
                        { path: '', redirectTo: '/calculate-plazo', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
