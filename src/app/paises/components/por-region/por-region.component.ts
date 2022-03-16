import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Countries } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  termino:string = "hola mundo";
  existeError:boolean = false;
  paises:Countries[] = [];

  constructor(
    private servicio:PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar(dato:string) {
    console.log(this.termino);

    this.termino = dato;

    this.existeError = false;

    this.servicio.buscarPorRegion(this.termino).subscribe(res => {
      console.log(res);
      this.paises = res;
    }, (err) => {
      this.existeError = true;
    });
  }

}
