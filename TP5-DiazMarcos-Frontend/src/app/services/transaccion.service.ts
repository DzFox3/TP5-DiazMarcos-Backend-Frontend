import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  urlProd: string = 'http://localhost:4000/api/'
  constructor(private _http: HttpClient) { }

  getTransacciones():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlProd+"transaccion", httpOption)
  }

  getTF(monedaO: string, monedaD: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlProd+"transaccion?monedaOrigen="+monedaO+"&monedaDestino="+monedaD, httpOption)
  }
  creatTransaccion(tran: Transaccion): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(tran);

    return this._http.post(this.urlProd+"transaccion",body, httpOption);
  }

  getConvertidor(cant: number, de: string, a: string): Observable<any>{
    const httpOpctions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
		    'X-RapidAPI-Key': '711202c5b2msh9862c5303796183p105ad0jsnfd14cc755c05',
		    'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
    const body = new HttpParams()
    .set('from-value', cant)
		.set('from-type', de)
		.set('to-type', a);
    return this._http.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert',body,httpOpctions);
  }
  getModena(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '711202c5b2msh9862c5303796183p105ad0jsnfd14cc755c05',
		    'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      })
    }
    return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies', httpOptions);
  }
}
