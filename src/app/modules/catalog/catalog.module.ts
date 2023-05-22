import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CatalogComponent } from './main/catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [BrowserModule, CatalogRoutingModule],
  providers: [],
  bootstrap: [],
})
export class CatalogAppModule {}
