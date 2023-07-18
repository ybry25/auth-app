import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'home' },
  { path: 'precios', component: PreciosComponent, title: 'precios' },
  {
    path: 'protegida',
    component: ProtegidaComponent,
    canActivate: [authGuard],
    title: 'protegida',
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
