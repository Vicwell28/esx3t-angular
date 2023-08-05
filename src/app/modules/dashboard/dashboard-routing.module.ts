import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { SaleComponent } from './sale/sale.component';
import { GraphicsComponent } from './graphics/graphics.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: GraphicsComponent,
      },
      {
        path: 'categories',
        component: ViewCategoryComponent,
      },
      {
        path: 'sales',
        component: SaleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
