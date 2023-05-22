import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboarAppdModule } from './modules/dashboard/dashboard.module';
import { CatalogAppModule } from './modules/catalog/catalog.module';
import { LangingPageAppModule } from './modules/landing-page/landing-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    CatalogAppModule,
    DashboarAppdModule,
    LangingPageAppModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
