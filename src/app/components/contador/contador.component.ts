import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  numero : number = 1;
  isauth : boolean = false;
  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
    if(this.numero <= 0)
      this.isauth = true;
  }
}