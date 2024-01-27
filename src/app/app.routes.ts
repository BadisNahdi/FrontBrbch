import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { MainComponent } from './components/user/main/main.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { PostsComponent } from './components/user/posts/posts.component';
import { NewPostComponent } from './components/user/posts/new-post/new-post.component';
import { EditPostComponent } from './components/user/posts/edit-post/edit-post.component';
import { CategoryComponent } from './components/user/posts/category/category.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'categories',
            component: CategoryComponent
          },
          {
            path: 'create',
            component: NewPostComponent
          },
          {
            path: 'edit/:slug',
            component: EditPostComponent
          },
          {
            path: '**',
            redirectTo: '',
            pathMatch: 'full'
          }
        ]
      },
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },



];
