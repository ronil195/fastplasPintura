import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription, interval } from 'rxjs';

import { LinhaService } from './linha.service';

@Component({
  selector: 'app-linha',
  templateUrl: './linha.component.html',
  styleUrls: ['./linha.component.css']
})
export class LinhaComponent implements OnInit {
  [x: string]: any;

  @Input("linha") iLinha:number = 0;
  @Input("interval") iInterval:number = 0;

  columns: Array <any> = new Array();
  itemsTurno1: Array <any> = new Array();
  itemsTurno2: Array <any> = new Array();
  itemsTurno3: Array <any> = new Array();
  
  private readonly onDestroy = new Subject();
  private updateSubscription?: Subscription;

  constructor (private linhaService: LinhaService) {}

  ngOnInit(): void {

      this.columns = this.linhaService.getColumns ();

      // intervalo  
      this.updateSubscription = interval(this.iInterval * 1000).subscribe(val => {
          console.log("** Linha 1: ", this.iLinha);
          console.log("** Interval 1: ", this.iInterval);
          this.getItemsTurno(this.iLinha,1)
        });

      this.updateSubscription = interval(this.iInterval * 1000).subscribe(val => {
        console.log("** Linha 2: ", this.iLinha);
        console.log("** Interval 2: ", this.iInterval);
          this.getItemsTurno(this.iLinha,2)
      });
      this.updateSubscription = interval(this.iInterval * 1000).subscribe(val => {
        console.log("** Linha 3: ", this.iLinha);
        console.log("** Interval 3: ", this.iInterval);
        this.getItemsTurno(this.iLinha,3)
      });

  }

  getItemsTurno(iLinha:number, iTurno:number) {
    this.linhaService.getItems(iLinha, iTurno).subscribe(response => {
      if (iTurno === 1)
        this.itemsTurno1 = response.items;
      else if (iTurno ===2 ) 
        this.itemsTurno2 = response.items;
      else if (iTurno === 3)
        this.itemsTurno3 = response.items;
    });
  }

  ngOnDestroy() {
    this.onDestroy.complete();
  }

}
