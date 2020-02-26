import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full'
  },
  {
    path: 'post',
    children: [
      {
        path:'',
        component: PostListComponent,
      },
      {
        path: ':id',
        component: PostDetailComponent
      }
    ]
  },
  {
    path: '**',
    component: NopagefoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
