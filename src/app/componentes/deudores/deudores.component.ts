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
  deudaParaEditar:DeudorInterface;
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
  totalDeudas=0;
  abono:number;
  resto=0;
  desbloq=false;
  mencrearState:boolean=false;
  menediState:boolean=false;
  mendeleState:boolean=false;
  constructor( public DeudasService:DeudasService) { }
  ngOnInit() {
    this.DeudasService.getDeudas().subscribe(deuda =>{
      this.deudoritem=deuda;
       console.log(this.deudoritem);
       for (let entry of this.deudoritem) {
       this.totalDeudas += entry.cantidad;
       console.log(this.totalDeudas);
  }
    });
  }
  onCreateDeuda($event){
        this.crearState=true;
  }
  onEditDeuda($event, deuda: DeudorInterface){
    this.deudaParaEditar=deuda;
    this.ediState=true;
  }
  onCreateYa(){
    this.DeudasService.addDeuda(this.deudornuevo);
    //this.deudornuevo=null;
    this.totalDeudas=0;
    this.onCancel();
    this.onMensajeCreador();
  }
  onCancel(){
    this.crearState=false;
    this.ediState=false;
    this.deleState=false;
    this.desbloq = false;
    this.abono=0;
    this.deudaParaEditar=null;
  }
  onDeleteConfirmer($event){
    this.resto=this.deudaParaEditar.cantidad - this.abono;
    if (this.resto==0){
      console.log("elimina if");
      this.DeudasService.deleteDeuda(this.deudaParaEditar.id);
      this.totalDeudas=0;
      this.abono=0;
      this.onCancel();
      this.onMensajeEliminado();
        }else{
          console.log("edita if");
          this.deudaParaEditar.cantidad=this.resto;
          this.DeudasService.editDeuda(this.deudaParaEditar);
          this.totalDeudas=0;
          this.abono=0;
          this.onCancel();
          this.onMensajeEditado();
        }
      }
  onDesbloq($event){
    this.desbloq =! this.desbloq;
  }
  onSaldarDeuda($event,duda: DeudorInterface){
    this.deudaParaEditar=duda;
    this.deleState=true;
  }
  onGuardar($event){
    this.DeudasService.editDeuda(this.deudaParaEditar);
    this.totalDeudas=0;
    this.onCancel();
    this.onMensajeEditado();
  }
  onMensajeCreador(){
    this.mencrearState=true;
    setTimeout(() => {
       this.mencrearState = false;
     }, 2500);
  }
  onMensajeEditado(){
    this.menediState=true;
    setTimeout(() => {
       this.menediState = false;
     }, 2500);
  }
  onMensajeEliminado(){
    this.mendeleState=true;
    setTimeout(() => {
       this.mendeleState = false;
     }, 2500);
  }
}
