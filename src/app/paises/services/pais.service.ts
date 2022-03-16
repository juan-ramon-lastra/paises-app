import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // url base de la API
  private apiUrl:string = "https://restcountries.com/v3.1";

  constructor(
    private http:HttpClient
  ) {  }

  buscarPorPais(termino:string):Observable<Countries[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Countries[]>(url);
  }

  buscarPorCapital(termino:string):Observable<Countries[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Countries[]>(url);
  }

  buscarPorRegion(termino:string):Observable<Countries[]> {
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Countries[]>(url);
  }

}
