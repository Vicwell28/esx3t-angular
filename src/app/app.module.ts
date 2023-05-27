import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboarAppdModule } from './modules/dashboard/dashboard.module';
import { CatalogAppModule } from './modules/catalog/catalog.module';
import { LangingPageAppModule } from './modules/landing-page/landing-page.module';
import { AuthAppdModule } from './modules/auth/auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CatalogAppModule,
    DashboarAppdModule,
    LangingPageAppModule,
    AuthAppdModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
