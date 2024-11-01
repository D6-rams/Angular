import { Component, } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-procesos',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './procesos.component.html',
  styleUrl: './procesos.component.css'
})
export class ProcesosComponent {
 

}
