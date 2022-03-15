import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino:string = "hola mundo";

  constructor(
    private servicio:PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar() {
    console.log(this.termino);
    this.servicio.buscarPais(this.termino).subscribe(res => {
      console.log(res);
    });
  }

}
