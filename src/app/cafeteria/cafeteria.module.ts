import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeteriaRoutingModule } from './cafeteria-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { TestimonioComponent } from './components/testimonio/testimonio.component';
import { GaleryComponent } from './components/galery/galery.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ProcesoPageComponent } from './pages/proceso-page/proceso-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { GaleryPageComponent } from './pages/galery-page/galery-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TestimonioComponent,
    GaleryComponent,
    MenuComponent,
    AboutComponent,
    ProcesoPageComponent,
    MenuPageComponent,
    GaleryPageComponent,
    ContactoPageComponent
  ],
  imports: [
    CommonModule,
    CafeteriaRoutingModule,

  ]
})
export class CafeteriaModule { }
