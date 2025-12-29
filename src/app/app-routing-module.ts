import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'tasks',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: 'create',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/create/create.module').then(m => m.CreateModule)
  },
  {
    path: 'edit/:id',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/edit/edit.module').then(m => m.EditModule)
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
