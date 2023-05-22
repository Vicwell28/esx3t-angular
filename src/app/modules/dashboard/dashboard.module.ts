import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './main/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [BrowserModule, DashboardRoutingModule],
  providers: [],
  bootstrap: [],
})
export class DashboarAppdModule {}
