import { Component } from '@angular/core';
import { Tarea } from '../tarea.model';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  tareas:Tarea[];

  constructor(private service:TareaService){}

  async ngOnInit(): Promise<void>{
    this.tareas = await this.service.getAll();
    console.log(this.tareas);
  }

}
