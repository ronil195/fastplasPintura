import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

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
    let sUrl: String = environment.url;
    let apiRest = `${sUrl}dts/datasul-rest/resources/prg/esp/v1/linhaAbastecimento/turno/${iTurno}/linha/${iLinha}`;
    return this.http.get(apiRest);
  }
}
