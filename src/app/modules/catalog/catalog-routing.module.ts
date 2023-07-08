import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './main/catalog.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { CatalogDetailComponent } from './catalog-detail/catalog-detail.component';

const routes: Routes = [
  {
    path: 'catalogo',
    component: CatalogComponent,
    // canActivate: [authGuard]
  },
  {
    path: 'catalogo/:id',
    component: CatalogDetailComponent,
    // canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
