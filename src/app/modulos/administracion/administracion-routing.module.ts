import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path:"crear",
    component: CrearPersonaComponent
  },
  {
    path:"eliminar",
    component: EliminarPersonaComponent
  },
  {
    path:"buscar",
    component:BuscarPersonaComponent
  },
  {
    path:"editar",
    component:EditarPersonaComponent
  },
  {
    path:"buscar-producto",
    component: BuscarProductoComponent
  },
  {
    path:"editar-producto/:id",
    component: EditarProductoComponent
  },
  {
    path:"crear-producto",
    component: CrearProductoComponent
  },
  {
    path:"eliminar-producto/:id",
    component: EliminarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
