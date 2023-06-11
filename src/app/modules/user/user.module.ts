import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [BrowserModule, UserRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
})
export class UserAppdModule {}
