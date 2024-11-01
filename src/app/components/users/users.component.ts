import { Component, inject } from '@angular/core';
import { UsuarioservicioService } from '../../services/usuarioservicio.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  userservice = inject(UsuarioservicioService);
  lstusuarios:any;

  constructor(){
   this.userservice.getusers().subscribe(data =>{
    this.lstusuarios = data;
    console.log(this.lstusuarios);
   })
  }

}
