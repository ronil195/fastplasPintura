import { Component } from '@angular/core';

@Component({
  selector: 'app-param-linha',
  templateUrl: './param-linha.component.html',
  styleUrls: ['./param-linha.component.css']
})
export class ParamLinhaComponent {

  public sLinha: string = "109";
  public sInterval: string = "10";
  poDialog: any;

  leaveInterval() {
    console.log("leave");
  }

}
