import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './containers/footer/footer.component';
import { NotfoundComponent } from './containers/notfound/notfound.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { MaterialModule } from '../shared/components/material/material.app.module';
import { StoryProductComponent } from './components/story-product/story-product.component';
import { FormDialogsAppModule } from './components/DialogsForms/forms.dialogs.module';
import { DfOrdenarProductoComponent } from './components/df-ordenar-producto/df-ordenar-producto.component';

@NgModule({
  declarations: [
    FooterComponent,
    NotfoundComponent,
    NavbarComponent,
    StoryProductComponent,
    DfOrdenarProductoComponent,
  ],
  imports: [BrowserModule, MaterialModule, FormDialogsAppModule],
  exports: [
    FooterComponent,
    NotfoundComponent,
    NavbarComponent,
    StoryProductComponent,
    DfOrdenarProductoComponent
  ],
  providers: [],
  bootstrap: [],
})
export class LayoutAppModule {}
