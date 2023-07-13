import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { MaterialModule } from 'src/app/shared/components/material/material.app.module';

@NgModule({
  declarations: [FormDialogComponent],
  imports: [MaterialModule],
  exports: [FormDialogComponent],
  providers: [],
  bootstrap: [],
})
export class FormDialogsAppModule {}
