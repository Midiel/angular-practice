import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JsonPlaceholderComponent } from './json-placeholder/json-placeholder.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'json-placeholder', component: JsonPlaceholderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
