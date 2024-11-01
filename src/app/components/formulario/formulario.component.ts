import { Component, inject } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  id:number = 0;
  cod:number = 0;
  navigator:Router = new Router();
  url:ActivatedRoute = inject(ActivatedRoute);

  isInvalid = false;
  isAdmin = true;
  private FormBuilder = new FormBuilder();
  materiasForm = this.FormBuilder.group({
   id: ['',Validators.required],
   materia: ['',Validators.required],
   nivel: ['',Validators.required],


  })

  constructor(){
    this.id = this.url.snapshot.params['id'];
    this.cod = this.url.snapshot.params['cod'];

  }
  
  irMaterias(){
    this.navigator.navigate(['materias']);
  }

  guardar(){
    console.log(this.materiasForm);
    this.isInvalid = !this.materiasForm.controls.id.valid;
    console.log(this,this.isInvalid);
  }



}

