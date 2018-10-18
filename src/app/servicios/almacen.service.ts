import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from   'rxjs/operators';
import { ProductoInterface } from '../interfaces/productointerface';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AddproductsComponent } from '../componentes/almacen/addproducts/addproducts.component';

@Injectable({
  providedIn: 'root'
})
export class AlmacenService {
  private ProductosCollection : AngularFirestoreCollection<ProductoInterface>;
  productos: Observable <ProductoInterface[]>;
  productosDoc: AngularFirestoreDocument <ProductoInterface>;

  constructor(public db: AngularFirestore) {
    this.ProductosCollection = db.collection<ProductoInterface >('productos');
    this.productos= this.ProductosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as ProductoInterface;
        const id =a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
  addProduct(producto: ProductoInterface){
    console.log("este es el add producto del servicio");
    this.ProductosCollection.add(producto);
    console.log("Producto Agregado");
  }
  getProducts(){
    console.log("Arergñlo obtenido");
    return this.productos;
  }
}
