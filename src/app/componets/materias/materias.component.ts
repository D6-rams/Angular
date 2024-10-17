import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "../../components/login/login.component";
import { MateriadetallesComponent } from "../../components/materiadetalles/materiadetalles.component";

@Component({
  selector: 'app-materias',
  standalone: true,
  imports: [FormsModule, LoginComponent, MateriadetallesComponent],
  templateUrl: './materias.component.html',
  styleUrl: './materias.component.css'
})
export class MateriasComponent {

  materias = [
    {id:1, nombre: 'Gestion de Proyectos', nivel:'Lic'},
    {id:2, nombre: 'Desarrollo Web', nivel:'Lic'},
    {id:3, nombre: 'Conmutacion', nivel:'Lic'},
    {id:4, nombre: 'Taller de Inv', nivel:'Lic'}
  
];

todalista = true;
autenticado = true;
texto: string = "";
materiaseleccionada:any={};
mensaje: string ="";
//metodo 
getmateria(event:Event){
  let id =event.target as HTMLSelectElement;
  let idx = Number(id.value);
  
  const asignatura = this.materias.find(materia =>materia.id === idx) || {};
  console.log(asignatura);
  this.materiaseleccionada = asignatura;



}
onNotify(message: string){
  this.mensaje = message
  console .log(this.mensaje);
}

}
