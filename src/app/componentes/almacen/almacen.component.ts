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
  editState:boolean=false;
  deleteState:boolean=false;
  productoeditar:ProductoInterface;
  idToDelete:string;
  constructor(public AlmacenService: AlmacenService) { }
  ngOnInit() {
    this.AlmacenService.getProducts().subscribe(producto =>{
      this.productoitem=producto;
     console.log(producto);
      console.log("Arreglo de Productos Obtenidos");
    });
  }
  onEditProducto( event, producto:ProductoInterface){
    console.log("quieres editar");
    this.editState= true;
    this.productoeditar=producto;
    console.log(this.productoeditar);
}
onDeleteProducto(event, id:string){
  console.log("quieres eliminar");
  this.deleteState= true;
  this.idToDelete=id;
  }
  onDeleteConfirmer(){
    this.deleteState= false;
    this.AlmacenService.deleteProduct(this.idToDelete);
  }
  onDeleteCancel(){
    this.deleteState= false;
    this.idToDelete='';
  }
onGuardar(){
console.log(this.productoeditar);
this.AlmacenService.updateProduct(this.productoeditar);
}
}
