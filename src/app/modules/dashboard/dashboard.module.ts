import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './main/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/shared/components/material/material.app.module';
import { ExampleComponent } from './example/example.component';
import { ViewCategoryComponent } from './views/view-category/view-category.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { LayoutAppModule } from 'src/app/layout/layout.app.module';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { ViewComponent } from './views/view/view.component';
import { SaleComponent } from './sale/sale.component';
import { SaleDetailComponent } from './saleDetails/sale-detail.component';
import { RoleViewComponent } from './views/role-view/role-view.component';
import { UserComponent } from './user/user.component';
import { OrdersComponent } from './Orders/orders/orders.component';
import { OrderDetailsComponent } from './Orders/orders/orderDetails/orderDetails.component';
import { StatesComponent } from './states/states.component';
import { CitiesComponent } from './cities/cities.component';
import { BranchesComponent } from './branches/branches.component';
import { ProductBranchesComponent } from './products/view-product/product-branches/product-branches.component';
import { CategoryproductsComponent } from './products/categoryproducts/categoryproducts.component';
//import { BarChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    ExampleComponent,
    ViewCategoryComponent,
    GraphicsComponent,
    ViewProductComponent,
    SaleComponent,
    SaleDetailComponent,
    ViewComponent,
    RoleViewComponent,
    UserComponent,  
    UserComponent,
    OrdersComponent,
    OrderDetailsComponent,
    StatesComponent,
    CitiesComponent,
    BranchesComponent,
    ProductBranchesComponent,
    CategoryproductsComponent
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    MaterialModule,
    LayoutAppModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    // BarChartModule,
  ],
  providers: [],
  bootstrap: [],
})
export class DashboarAppdModule {}


