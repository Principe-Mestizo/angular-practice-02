import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ProcesoPageComponent } from './pages/proceso-page/proceso-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { GaleryPageComponent } from './pages/galery-page/galery-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, },
  {path: 'about', component: AboutComponent},
  {path: 'proceso', component: ProcesoPageComponent},
  {path: 'menu', component: MenuPageComponent},
  {path: 'galeria', component: GaleryPageComponent},
  {path: 'contacto', component: ContactoPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeteriaRoutingModule { }
