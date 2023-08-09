import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './main/app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboarAppdModule } from './modules/dashboard/dashboard.module';
import { CatalogAppModule } from './modules/catalog/catalog.module';
import { LangingPageAppModule } from './modules/landing-page/landing-page.module';
import { AuthAppdModule } from './modules/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/components/material/material.app.module';
import { UserAppdModule } from './modules/user/user.module';
import { LayoutAppModule } from './layout/layout.app.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutAppModule,
    CatalogAppModule,
    DashboarAppdModule,
    LangingPageAppModule,
    AuthAppdModule,
    UserAppdModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
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
