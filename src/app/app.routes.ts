import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MateriasComponent } from './componets/materias/materias.component';
import { AboutComponent } from './componets/about/about.component';
import path from 'path';
import { ContadorComponent } from './components/contador/contador.component';

export const routes: Routes = [


 {
    path:"materias",
    component:MateriasComponent
},
{
    path:"contador",
    component:ContadorComponent
},
{
    path:"about",
    component:AboutComponent
},
{
  path: "*",
  redirectTo: 'materias'
}

];