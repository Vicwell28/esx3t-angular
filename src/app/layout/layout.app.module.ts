import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './containers/footer/footer.component';
import { NotfoundComponent } from './containers/notfound/notfound.component';

@NgModule({
  declarations: [FooterComponent, NotfoundComponent],
  imports: [BrowserModule],
  exports: [FooterComponent],
  providers: [],
  bootstrap: [],
})
export class LayoutAppModule {}
