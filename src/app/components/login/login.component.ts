import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:{nombre:string,avatar: string,tipo:number}=
  {
    nombre:"",
    avatar:"",
    tipo:0
  };

  isauth = true;


constructor(){
  this.usuario.nombre="Daniel Ramos";
  this.usuario.avatar="foto";
  this.usuario.tipo=2;
}

}
