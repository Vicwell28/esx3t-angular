import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './main/catalog.component';

const routes: Routes = [
  {
    path: 'catalogo',
    component: CatalogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
