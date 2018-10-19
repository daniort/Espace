import { Component, OnInit } from '@angular/core';
import { DeudorInterface } from '../../interfaces/deudorinterface';
import {DeudasService} from '../../servicios/deudas.service';

@Component({
  selector: 'app-deudores',
  templateUrl: './deudores.component.html',
  styleUrls: ['./deudores.component.css']
})
export class DeudoresComponent implements OnInit {
  //Declaracion de variables
  deudoritem:DeudorInterface[];
  deudornuevo:DeudorInterface={
      nombre:'',
      cantidad:0,
      descripcion:'',
      nota:'',
  };
  crearState:boolean=false;
  ediState:boolean=false;
  deleState:boolean=false;
  idToDelete:string;


  constructor( public DeudasService:DeudasService) { }
  ngOnInit() {
    this.DeudasService.getDeudas().subscribe(deuda =>{
      this.deudoritem=deuda;
     console.log(deuda);
      console.log("Arreglo de Productos Obtenidos");
    });
  }
  onCreateDeuda($event){
      console.log("quieres crear una deuda");
      this.crearState=true;
  }
  onDeleteDeuda($event, id:string){
      this.idToDelete=id;
      this.deleState=true;
  }
  onEditDeuda(){
    console.log("quieres editar una deuda");
    this.ediState=true;
  }
  onCreateYa(){
    this.DeudasService.addDeuda(this.deudornuevo);
    this.onCancel();
  }
  onCancel(){
    this.crearState=false;
    this.ediState=false;
    this.deleState=false;
  }
  onDeleteConfirmer($event){
    console.log(this.idToDelete);
    this.DeudasService.deleteDeuda(this.idToDelete);
    this.onCancel();
  }

}
