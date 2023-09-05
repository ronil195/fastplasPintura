import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

import { LinhaService } from './linha.service';

@Component({
  selector: 'app-linha',
  templateUrl: './linha.component.html',
  styleUrls: ['./linha.component.css']
})
export class LinhaComponent implements OnInit {
  [x: string]: any;

  columns: Array <any> = new Array();
  itemsTurno1: Array <any> = new Array();
  itemsTurno2: Array <any> = new Array();
  itemsTurno3: Array <any> = new Array();

  constructor (private linhaService: LinhaService) {}

  private updateSubscription?: Subscription;

  ngOnInit(): void {

      this.columns = this.linhaService.getColumns ();

      // intervalo  
      this.updateSubscription = interval(10000).subscribe((val) => this.getItemsTurno(109,1));
      this.updateSubscription = interval(10000).subscribe((val) => this.getItemsTurno(109,2));
      this.updateSubscription = interval(10000).subscribe((val) => this.getItemsTurno(109,3));

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

}
