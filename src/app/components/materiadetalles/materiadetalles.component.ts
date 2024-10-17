import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-materiadetalles',
  standalone: true,
  imports: [],
  templateUrl: './materiadetalles.component.html',
  styleUrl: './materiadetalles.component.css'   
})
export class MateriadetallesComponent {
@Input()materia:any={};

@Output() notify: EventEmitter<string> = new EventEmitter<string>();


sendNotification() {
  this.notify.emit('El hijo ha hecho clic en el boton'); 
 
}

}
