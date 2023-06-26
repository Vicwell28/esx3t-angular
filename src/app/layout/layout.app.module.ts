import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './containers/footer/footer.component';
import { NotfoundComponent } from './containers/notfound/notfound.component';
import { NavbarComponent } from './containers/navbar/navbar.component';

@NgModule({
  declarations: [FooterComponent, NotfoundComponent, NavbarComponent],
  imports: [BrowserModule],
  exports: [FooterComponent, NotfoundComponent, NavbarComponent],
  providers: [],
  bootstrap: [],
})
export class LayoutAppModule {}
