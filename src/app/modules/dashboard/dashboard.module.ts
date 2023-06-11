import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './main/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/shared/components/material/material.app.module';
import { ExampleComponent } from './example/example.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { GraphicsComponent } from './graphics/graphics.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ExampleComponent,
    ViewCategoryComponent,
    GraphicsComponent,
  ],
  imports: [BrowserModule, DashboardRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [],
})
export class DashboarAppdModule {}
