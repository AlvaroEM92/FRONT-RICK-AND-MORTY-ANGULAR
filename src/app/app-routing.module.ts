import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterPageComponent } from './domains/pages/character-page/character-page.component';
import { DetailComponent } from './domains/components/detail/detail.component';
import { HomeComponent } from './domains/components/home/home.component';
import { LoginPageComponent } from './domains/components/login-page/login-page.component';
import { RegisterPageComponent } from './domains/components/register-page/register-page.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'character', component: CharacterPageComponent
  },
  {
    path: 'detail/:id', component: DetailComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'register', component: RegisterPageComponent
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
