import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';

import { ParamLinhaComponent } from './param-linha.component';
import { LinhaComponent } from '../linha/linha.component';



@NgModule({
  declarations: [
    ParamLinhaComponent,
    LinhaComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    FormsModule
  ],
  exports: [
    ParamLinhaComponent
  ]
})
export class ParamLinhaModule { }
