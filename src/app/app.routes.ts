import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MateriasComponent } from './componets/materias/materias.component';
import { AboutComponent } from './componets/about/about.component';
import path from 'path';
import { ContadorComponent } from './components/contador/contador.component';
import { Page404Component } from './components/page404/page404.component';
import { ProcesosComponent } from './components/procesos/procesos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [


 {
    path:"materias",
    component:MateriasComponent
},
{
    path:"procesos",
    component:ProcesosComponent,
    children:[
        {
            path:"contador",
            component:ContadorComponent
        },
        {
            path:"formulario/:id/:cod",
            component:FormularioComponent
        }
    ]
       
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
  redirectTo: 'materias',
  pathMatch:'full'
},
{
    path:"**",
    component:Page404Component

},
{
    path:"usuarios",
    component:UsersComponent
},
   


];