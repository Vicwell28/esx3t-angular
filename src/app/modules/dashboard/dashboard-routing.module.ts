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
import { OrdersComponent } from './Orders/orders/orders.component';
import { OrderDetailsComponent } from './Orders/orders/orderDetails/orderDetails.component';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { BranchesComponent } from './branches/branches.component';
import { ProductBranchesComponent } from './products/view-product/product-branches/product-branches.component';
import { CategoryproductsComponent } from './products/categoryproducts/categoryproducts.component';
 
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
        path: 'products',
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
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'order/detail',
        component: OrderDetailsComponent
      },
      {
        path: 'states',
        component: StatesComponent,
      },
      {
        path: 'Cities',
        component: CitiesComponent,
      },
      {
        path: 'branches',
        component: BranchesComponent,
      },
      {
        path: 'products/branches',
        component: ProductBranchesComponent,
      },
      {
        path: 'products/categories',
        component: CategoryproductsComponent
      }
   
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}