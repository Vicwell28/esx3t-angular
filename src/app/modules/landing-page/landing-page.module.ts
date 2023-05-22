import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageComponent } from './main/landing-page.component';
import { LangingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [BrowserModule, LangingPageRoutingModule],
  providers: [],
  bootstrap: [],
})
export class LangingPageAppModule {}
