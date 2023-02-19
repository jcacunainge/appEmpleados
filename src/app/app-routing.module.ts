import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';

const routes: Routes = [
  //Si no se agrega nada a la ruta, redirije a el componente list-em
  {path: '', redirectTo: 'list-empleados', pathMatch: 'full'},
  {path: 'list-empleados', component: ListEmpleadosComponent},
  {path: 'create-empleado', component: CreateEmpleadosComponent},
  //Redireciona al componente principal, cuando se utiliza una ruta inexistente
  {path: '**', redirectTo: 'list-empleados', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
