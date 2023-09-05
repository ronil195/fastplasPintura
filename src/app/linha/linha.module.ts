import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule }   from '@angular/forms';

import { LinhaComponent } from './linha.component';
import { ParamLinhaComponent } from '../param-linha/param-linha.component';

@NgModule({
  declarations: [
    LinhaComponent,
    ParamLinhaComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    FormsModule
  ],
  exports: [
    LinhaComponent
  ]
})
export class LinhaModule { }
