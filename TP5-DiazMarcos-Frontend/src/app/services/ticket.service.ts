import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  urlTicket: string = 'http://localhost:4000/api/'
  constructor(private _http: HttpClient) { }

  getTickets():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlTicket+"ticket", httpOption)
  }
  getTicket(id: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlTicket+"ticket/"+id, httpOption)
  }
  getCat(cat: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams().append('categoriaEspectador',cat) 
    }
    return this._http.get(this.urlTicket+"ticket/categoria", httpOption)
  }
  creatTicket(ticket: Ticket): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket);
    
    return this._http.post(this.urlTicket+"ticket",body, httpOption);
  }
  deleteTicket(id: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.delete(this.urlTicket+"ticket/"+id, httpOption)
  }
  getEspectadores():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlTicket+"espectador", httpOption)
  }
  putTicket(ticket: Ticket): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(ticket);
    
    return this._http.put(this.urlTicket+"ticket/"+ticket._id,body, httpOption);
  }
}
