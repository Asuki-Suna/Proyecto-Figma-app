import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { JuegosComponent } from './juegos/juegos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactanosComponent},
  {path: 'juegos', component: JuegosComponent}
]; // zona para añadir rutas
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
