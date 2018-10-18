import { Component, OnInit } from '@angular/core';
import { AlmacenService } from '../../servicios/almacen.service';
import { ProductoInterface } from '../../interfaces/productointerface';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  productoitem: ProductoInterface[];

  constructor(public AlmacenService: AlmacenService) { }

  ngOnInit() {
    this.AlmacenService.getProducts().subscribe(producto =>{
      //this.productoitem=producto;
      console.log("debi cargar ya ");
      console.log(producto);
      console.log("Arreglo de Productos Obtenidos");
    });
  }

}
