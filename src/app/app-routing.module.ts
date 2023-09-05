import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamLinhaComponent } from './param-linha/param-linha.component';

const appRoutes:Routes = [
  {path:'', component: ParamLinhaComponent},
  {path:'linha-pintura', component: ParamLinhaComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
