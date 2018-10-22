import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from '../../interfaces/productointerface';
import { CarritoInterface } from '../../interfaces/carritointerface';
import { HomeService } from '../../servicios/home.service';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 fecha=Date();
 noProductos:0;
 productoBus:string;
 productoitem: ProductoInterface[];//arreglo de productos
 carrito: ProductoInterface[];//arreglo de productos
precio:number;
total:number;
 ventaNueva:CarritoInterface={
         productos:[''],
         cobrado:0,
         vuelto:0,
         total:0,
         deuda:false,
         vendedor:'admin'
       };
       productoelegido:ProductoInterface={
               nombre:'',
               cantidad:0,
      };


  constructor(public HomeService: HomeService, public router: Routes) {}
   ngOnInit() {
    this.HomeService.getProducts().subscribe(producto =>{
      this.productoitem=producto;
     console.log(this.productoitem);
    });
  }
  onEscribiendo(){
    console.log(this.productoelegido.nombre);

    for (let i = 0; i < this.productoitem.length; i++) {

        this.productoitem[i];

    }
  }
  onAddCar(){
    
//    console.log(this.productoelegido.nombre);
    //for(var i = 0;i<this.productoitem.length;i++) {
      //return this.productoitem[i];
//}
    console.log("tu");
//
  }

}
