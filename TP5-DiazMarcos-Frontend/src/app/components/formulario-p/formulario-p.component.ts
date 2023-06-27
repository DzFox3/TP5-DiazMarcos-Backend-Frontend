import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-formulario-p',
  templateUrl: './formulario-p.component.html',
  styleUrls: ['./formulario-p.component.css']
})
export class FormularioPComponent implements OnInit {

  producto!: Producto;
  accion: string = ""
  constructor(private prod: ProductoService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { 
                this.producto = new Producto();
                this.producto.destacado = false;
              }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id'] == "0"){
          this.accion = "new";
        }else{
          this.accion = "update";
          this.cargarProd(params['id']);
        }
      }
    )
  }
  onSubmit() {
    console.log(this.producto);
  }
  public cargarProd(id: string){
    this.prod.getProducto(id).subscribe(
      result => {
        console.log(result)
        Object.assign(this.producto, result);
      }
    )
  }
  public guardarProd(){
    this.prod.creatProducto(this.producto).subscribe(
      (result:any) => {
        if(result.status == 1){
          console.log("Se agrego un nuevo producto")
        }else{
          console.log("Error procesando operacion")
        }
      }
    )
    this.router.navigate(['punto1']);
  }
  public cancelar(){    
    this.router.navigate(['punto1']);
  }
}
