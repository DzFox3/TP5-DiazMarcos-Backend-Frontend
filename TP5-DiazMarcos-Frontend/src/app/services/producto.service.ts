import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  urlProd: string = 'http://localhost:4000/api/'
  constructor(private _http: HttpClient) { }

  getProductos():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlProd+"producto", httpOption)
  }
  getProdDes(des: boolean):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams().append("destacado", des)
    }
    return this._http.get(this.urlProd+"producto", httpOption)
  }
  getProducto(id: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.get(this.urlProd+"producto/"+id, httpOption)
  }
  deleteProducto(id: string):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
    }
    return this._http.delete(this.urlProd+"producto/"+id, httpOption)
  }
  creatProducto(prod: Producto): Observable<any>{
    let httpOption = {
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()
    }
    let body = JSON.stringify(prod);
    
    return this._http.post(this.urlProd+"producto",body, httpOption);
  }
}
