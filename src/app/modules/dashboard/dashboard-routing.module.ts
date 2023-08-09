import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { ViewCategoryComponent } from './views/view-category/view-category.component';
import { ViewComponent } from './views/view/view.component';
import { SaleComponent } from './sale/sale.component';
import { UserComponent } from './user/user.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { RoleViewComponent } from './views/role-view/role-view.component';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { BranchesComponent } from './branches/branches.component';
 
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
        path: 'views',
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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
