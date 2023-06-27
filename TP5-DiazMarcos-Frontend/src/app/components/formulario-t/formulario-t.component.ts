import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-formulario-t',
  templateUrl: './formulario-t.component.html',
  styleUrls: ['./formulario-t.component.css']
})
export class FormularioTComponent implements OnInit {

  tk!: Ticket;
  accion: string = "";
  espectadores!: Array<Espectador>
  espectador!: Espectador
  local!: Date

  constructor(private ticket: TicketService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) {
                this.tk = new Ticket()
                this.local = new Date()
                
                this.espectador = new Espectador()
                this.espectadores = []
               }

  ngOnInit(): void {
    console.log(this.local)
    console.log(this.tk.fechaCompra)
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id'] == "0"){
          this.accion = "new";
        }else{
          this.accion = "update";
          this.cargarTicket(params['id']);
        }
      }
    )
    this.getEspec()
  }

  onSubmit() {
    console.log(this.tk);
  }

  public cargarTicket(id: string){
    this.ticket.getTicket(id).subscribe(
      result => {
        console.log(result)
        Object.assign(this.tk, result);
        this.tk.espectador = this.espectadores.find(item => item._id == this.tk.espectador._id)!;
      }
    )
  }
  public guardarTicket(){
    this.ticket.creatTicket(this.tk).subscribe(
      (result:any) => {
        if(result.status == 1){
          console.log("Se agrego un nuevo Ticket")
        }
      },
      (error) => {
        console.log("Error procesando operacion")
      }
    )
    this.router.navigate(['punto3']);
  }
  public cancelar(){    
    this.router.navigate(['punto3']);
  }
  public getEspec(){
    this.ticket.getEspectadores().subscribe(
      (result) => {
        this.espectadores = result
      }
    )
  }
  public actualizarTicket(){
    console.log(this.tk)
    this.ticket.putTicket(this.tk).subscribe(
      (result:any) => {
        if(result.status == 1){
          console.log("Se ha actualizado un producto")
        }
      },
      (error) => {
        console.log("Error procesando operacion")
      }
    )
    alert('Se ha actualizado su ticket')
    this.router.navigate(['punto3']);
  }
}
