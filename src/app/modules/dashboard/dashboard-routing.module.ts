import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { ViewCategoryComponent } from './views/view-category/view-category.component';
import { ViewComponent } from './views/view/view.component';
import { SaleComponent } from './sale/sale.component';
import { SaleDetailComponent } from './saleDetails/sale-detail.component';
import { UserComponent } from './user/user.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { RoleViewComponent } from './views/role-view/role-view.component';

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
        path: 'productos',
        component: ViewProductComponent,
      },
      { path: 'views',
        component: ViewComponent,
      },
      {
        path: 'roles',
        component: RoleViewComponent,
      },
      {
        path: 'sales',
        component: SaleComponent,
      },
      {
        path: 'sales/detail',
        component: SaleDetailComponent,
      },
      {
        path: 'users',
        component: UserComponent,
      },
      // {
      //   path: 'orders',
      //   component
      // }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
