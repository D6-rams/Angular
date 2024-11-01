import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioservicioService {

  constructor(private http: HttpClient) { }

  getusers(){
    return(this.http.get('https://regres.in/api/users', {responseType:'json'}))
  }
}
