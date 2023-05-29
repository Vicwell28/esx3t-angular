import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageComponent } from './main/landing-page.component';
import { LangingPageRoutingModule } from './landing-page-routing.module';
import { MaterialModule } from 'src/app/shared/components/material/material.app.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [BrowserModule, LangingPageRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [],
})
export class LangingPageAppModule {}
