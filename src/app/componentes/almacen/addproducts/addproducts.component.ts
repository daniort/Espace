import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AlmacenService } from '../../../servicios/almacen.service';
import { ProductoInterface } from '../../../interfaces/productointerface';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  producto: ProductoInterface={
          nombre:'',
          compra:0,
          cantidad:0,
          venta:0,
             };
  constructor(private AlmacenService  : AlmacenService) {}
  ngOnInit() { }

  onGuardarProducto(myForm: NgForm){
    console.log("metodo guardar producto");
    console.log(this.producto);
    this.AlmacenService.addProduct(this.producto);
    }
    
}
