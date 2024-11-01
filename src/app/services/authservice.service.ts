import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  usuario:any = {'name':'', 'type': ''};

constructor() { }

  setActiveConsumer(nom:string,tipo:number){
    this.usuario.name = nom;
    this.usuario.type = tipo;

  }

  getUser(){
    return this.usuario;
  }

  
 
}
