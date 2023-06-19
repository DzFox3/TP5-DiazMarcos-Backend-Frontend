import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  tickets!: Array<Ticket>
  categoria!: string

  constructor(private ticket: TicketService,
              private router: Router) { 
    this.tickets = [];
    this.getTickets();
    this.categoria = ""
  }

  ngOnInit(): void {
  }
  public getTickets(){
    this.ticket.getTickets().subscribe(
      (result)=>{
        this.tickets = result;
      }
    )
  }
  public agregarTicket(){
    this.router.navigate(['formularioT', 0]);
  }
  public modificarTicket(ticket: Ticket){
    this.router.navigate(['formularioT', ticket._id]);
  }
  public getCategoria(){
    this.ticket.getCat(this.categoria).subscribe(
      (result)=>{
        this.tickets = result;
      }
    )
  }
  public eliminarTicket(eliminado: Ticket){
    console.log(eliminado._id)
    this.ticket.deleteTicket(eliminado._id).subscribe(
      (result) => {
        if(result.status == 1){
          alert("Se elimino un tikcet")
        }
      },
      (error) => {
        console.log('Error al realizar el eliminado')
      }
    )
    window.location.reload();
  }
}
