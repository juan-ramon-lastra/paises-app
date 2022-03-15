import { Component, OnInit } from '@angular/core';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  termino:string = "hola mundo";
  existeError:boolean = false;
  paises:Countries[] = [];

  constructor(
    private servicio:PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar() {
    console.log(this.termino);

    this.existeError = false;

    this.servicio.buscarPais(this.termino).subscribe(res => {
      console.log(res);
      this.paises = res;
    }, (err) => {
      this.existeError = true;
    });
  }

}
