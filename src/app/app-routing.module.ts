import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JsonPlaceholderComponent } from './json-placeholder/json-placeholder.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'json-placeholder', component: JsonPlaceholderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
