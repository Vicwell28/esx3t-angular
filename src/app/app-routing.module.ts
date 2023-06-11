import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './layout/containers/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/langing-page', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: NotfoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
