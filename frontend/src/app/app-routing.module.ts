import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

//componentes
import { RegisterComponent } from './register/register.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
