import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  termino:string = "";
  existeError:boolean = false;
  paises:Countries[] = [];

  pais:Countries[] = [];

  constructor(
    private routerActive:ActivatedRoute,
    private servicio:PaisService
  ) { }

  ngOnInit(): void {
    this.routerActive.paramMap.subscribe(
      param => {
        //this.termino = String(param.get('id'));
        this.servicio.detalleCodigo(String(param.get('id'))).subscribe(res => {
          //console.log("Resultado VerPais: ", res);
          this.pais = res;
        })
      }
    )
  }


}
