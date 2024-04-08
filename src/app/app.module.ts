import { AssignTokenInterceptor } from './domains/interceptors/assign-token.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterPageComponent } from './domains/pages/character-page/character-page.component';
import { CharactersComponent } from './domains/components/characters/characters.component';
import { DetailComponent } from './domains/components/detail/detail.component';
import { HomeComponent } from './domains/components/home/home.component';
import { LoadingComponent } from './domains/components/loading/loading.component';
import { LoadingInterceptorService } from './services/loading.interceptor';
import { LoadingService } from './services/loading.service';
import { LoginComponent } from './domains/Auth/login/login.component';
import { RegisterComponent } from './domains/Auth/register/register.component';
import { ProductsComponent } from './domains/components/products/products.component';
import { LoginPageComponent } from './domains/components/login-page/login-page.component';
import { RegisterPageComponent } from './domains/components/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CharacterPageComponent,
    CharactersComponent,
    DetailComponent,
    HomeComponent,
    LoadingComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: AssignTokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
