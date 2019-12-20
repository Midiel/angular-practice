import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JsonPlaceholderComponent } from './json-placeholder/json-placeholder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'json-placeholder', component: JsonPlaceholderComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'detail/:id', component: PostDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
