import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboarAppdModule } from './modules/dashboard/dashboard.module';
import { CatalogAppModule } from './modules/catalog/catalog.module';
import { LangingPageAppModule } from './modules/landing-page/landing-page.module';
import { AuthAppdModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    CatalogAppModule,
    DashboarAppdModule,
    LangingPageAppModule,
    AuthAppdModule,
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
