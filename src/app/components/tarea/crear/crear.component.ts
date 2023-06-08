import { Component } from '@angular/core';
import { Tarea } from '../tarea.model';
import { TareaService } from '../tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
  
  tarea : Tarea = new Tarea();
  constructor(private service:TareaService, private router:Router) {}

  ngOninit(): void{        
  }

  guardarTarea(){
    this.service.create(this.tarea).subscribe(data =>{
      console.log(data);

    },error => console.log(error));    
  }

  onSubmit(){
    this.guardarTarea();
  }
  
}
