import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogComponent } from './main/catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { MaterialModule } from 'src/app/shared/components/material/material.app.module';
import { LayoutAppModule } from 'src/app/layout/layout.app.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    BrowserModule,
    CatalogRoutingModule,
    MaterialModule,
    LayoutAppModule,
  ],
  providers: [],
  bootstrap: [],
})
export class CatalogAppModule {}
