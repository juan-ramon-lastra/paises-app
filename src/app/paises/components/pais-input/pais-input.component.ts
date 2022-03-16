import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter:EventEmitter<string> = new EventEmitter();

  termino:string = "";
  titulo:string = "";

  constructor(private router:Router) { }

  establecerTitulo():void {
    if (this.router.url === "/region") {
      this.titulo = "Región";
    }
    else if (this.router.url === "/capital") {
      this.titulo = "Capital";
    }
    else if (this.router.url === "/") {
      this.titulo = "País";
    }
  }

  ngOnInit(): void {
    this.establecerTitulo();
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

}
