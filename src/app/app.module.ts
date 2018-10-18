import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { DeudoresComponent } from './componentes/deudores/deudores.component';
import { AlmacenComponent } from './componentes/almacen/almacen.component';
import { HomeComponent } from './componentes/home/home.component';


import {AlmacenService} from './servicios/almacen.service';


const routes: Routes = [
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
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
   AngularFireModule.initializeApp(environment.FireConfig, 'appTiendaBD'),
    FormsModule,
    AngularFirestoreModule,
  ],
  providers: [AlmacenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
