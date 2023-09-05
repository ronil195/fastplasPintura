import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinhaService {

  constructor(private http: HttpClient) { }

  getColumns(): Array <PoTableColumn>  {
    return  [
      {property: "turno", label: "Turno"},
      {property: "hora", label: "Hora"},
      {property: "qtd-skid", label: "Skip Hora"},
      {property: "qtd-accum", label:"Acumulado"}
    ]
  }

  getItems(iLinha:number, iTurno: number): Observable <any> {
    let apiRest = `http://iewin7:8080/dts/datasul-rest/resources/prg/esp/v1/linhaAbastecimento/turno/${iTurno}/linha/${iLinha}`;
    return this.http.get(apiRest);
  }


  /* testes
  getItems(iTurno: number): Array <object> {
    if (iTurno === 1) {
      return [
        {"turno": "1", "hora-ini": "07:00", "skid": "10", "accum": "10"},
        {"turno": "1", "hora-ini": "08:00", "skid": "20", "accum": "30"},
        {"turno": "1", "hora-ini": "09:00", "skid": "30", "accum": "60"},
        {"turno": "1", "hora-ini": "10:00", "skid": "6", "accum": "66"}
      ]
    } else if (iTurno ===2 ) {
      return [
        {"turno": "2", "hora-ini": "07:00", "skid": "10", "accum": "10"},
        {"turno": "2", "hora-ini": "08:00", "skid": "20", "accum": "30"},
        {"turno": "2", "hora-ini": "09:00", "skid": "30", "accum": "60"},
        {"turno": "2", "hora-ini": "10:00", "skid": "6", "accum": "66"}
      ]
    } else {
      return [
        {"turno": "3", "hora-ini": "07:00", "skid": "10", "accum": "10"},
        {"turno": "3", "hora-ini": "08:00", "skid": "20", "accum": "30"},
        {"turno": "3", "hora-ini": "09:00", "skid": "30", "accum": "60"},
        {"turno": "3", "hora-ini": "10:00", "skid": "6", "accum": "66"}
      ]
    }
  }
  */
}
