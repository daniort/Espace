import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DeudoresComponent } from './componentes/deudores/deudores.component';
import { AlmacenComponent } from './componentes/almacen/almacen.component';
import { HomeComponent } from './componentes/home/home.component';


const
routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent } ,
{ path: 'deudores', component: DeudoresComponent } ,
{ path: 'almacen', component: AlmacenComponent },
{ path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DeudoresComponent,
    AlmacenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
