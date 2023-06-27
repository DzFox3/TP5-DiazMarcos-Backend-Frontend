import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  tr: Array<any>;
  transaccion_Nueva!: Transaccion;
  monedaO!: string;
  monedaD!: string;
  dis!: boolean
  
  final!: number;
  data!: Array<any>

  constructor(private tran: TransaccionService) {
    this.transaccion_Nueva = new Transaccion();
    this.tr = []
    this.dis = false;
   }

  ngOnInit(): void {    
    this.valores();
    this.getTransacciones()
  }

  onSubmit() {
    console.log(this.transaccion_Nueva);
  }

  public getTransacciones(){
    this.tran.getTransacciones().subscribe(
      (result) => {
        this.tr = result
      }
    )
  }
  public guardarTransaccion(){
    this.transaccion_Nueva.cantidadDestino = this.final 
    this.tran.creatTransaccion(this.transaccion_Nueva).subscribe(
      (result:any) => {
        if(result.status == 1){
          console.log("Se agrego una nueva transaccion")
        }else{
          console.log("Error procesando operacion")
        }
      }
    )
    window.location.reload();
  }
  public getFiltro(){
    console.log(this.monedaO, this.monedaD)
    this.tran.getTF(this.monedaO, this.monedaD).subscribe(
      (result) => {
        this.tr = result
        console.log(this.tr)
      }
    )
  }

  //Api de RapidApi
  public getConvertir(){
    this.dis = true
    this.tran.getConvertidor(this.transaccion_Nueva.cantidadOrigen, this.transaccion_Nueva.monedaOrigen, this.transaccion_Nueva.monedaDestino).subscribe(
      (result) => {
        this.final = result.result;
      },
      error=>{
        console.log('no hay mas intentos o algo malio sal');
      }
    )
  }
  public valores(){
    this.tran.getModena().subscribe(
      (result) => {
        this.data = result
      }
    )
  }
}
