import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { ViewCategoryComponent } from './views/view-category/view-category.component';
import { ViewComponent } from './views/view/view.component';
import { SaleComponent } from './sale/sale.component';
import { UserComponent } from './user/user.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { RoleViewComponent } from './views/role-view/role-view.component';
import { OrdersComponent } from './Orders/orders/orders.component';
import { OrderDetailsComponent } from './Orders/orders/orderDetails/orderDetails.component';

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
        path: 'users',
        component: UserComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'orderDetail',
        component: OrderDetailsComponent
      }
      ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
