import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'tarea',
  loadChildren: () =>
    import('./components/tarea/tarea.module').then(
      (m) => m.TareaModule
    ),
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
