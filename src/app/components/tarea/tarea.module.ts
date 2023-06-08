import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTareasComponent } from './lista/lista-tareas.component';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: 'lista-tareas',
        component: ListaTareasComponent
    },
    {
      path: '',
      redirectTo: 'lista-tareas',
      pathMatch:'full'
    },
    {
      path: 'crear-tarea',
      component: CrearComponent
    }
]
@NgModule({
  declarations: [    
    ListaTareasComponent,
    CrearComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  exports: [RouterModule,ListaTareasComponent,FormsModule,CrearComponent]  
})
export class TareaModule { }