import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  productos: Array<any>
  des!: boolean

  constructor(private prod: ProductoService, private router: Router) { 
    this.productos = []
    this.obtenerProductos();
  }

  ngOnInit(): void {
  }

  public obtenerProductos(){
    this.prod.getProductos().subscribe(
      (result)=>{
        this.productos = result;
      }
    )
  }
  public prodDestacados(){
    this.prod.getProdDes(this.des).subscribe(
      (result)=>{
        this.productos = result;
      }
    )
  }
  public agregarProd(){
    this.router.navigate(['formularioP', 0]);
  }
  public modificarProd(producto: Producto){
    this.router.navigate(['formularioP', producto._id]);
  }
  public eliminarProd(eliminado: Producto){
    this.prod.deleteProducto(eliminado._id).subscribe(
      (result) => {
        if(result.status == 1){
          alert("Se elimino un producto")
        }
      }
    )
    window.location.reload();
  }
}
