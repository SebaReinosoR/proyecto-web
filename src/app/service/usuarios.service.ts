import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  constructor(private http:HttpClient) {
     
  }
  HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
    }
    ),
  };

  getUsuarios():Observable<any>{
    return this.http.get(`${environment.hostname}/Usuarios`);
  }
  postUsuario(rut:any , nombre:any):Observable<any>{
    return this.http.post(`${environment.hostname}/AgregarUsuario`,JSON.stringify({"nombre":nombre,"rut":rut}),this.HttpUploadOptions);
  }
  deleteUsuario(rut:any):Observable<any>{
    return this.http.delete(`${environment.hostname}/EliminarUsuario/${rut}`,this.HttpUploadOptions);
  }
  putUsuario(rut:any,nombre:any):Observable<any>{
    return this.http.put(`${environment.hostname}/ModificarUsuario/${rut}`,JSON.stringify({"nombre":nombre,"rut":rut}),this.HttpUploadOptions);
  }
  IniciarUsuario(rut:any):Observable<any>{
    return this.http.get(`${environment.hostname}/Usuario/${rut}`,this.HttpUploadOptions);
  }
}