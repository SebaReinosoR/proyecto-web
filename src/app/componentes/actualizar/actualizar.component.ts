import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {usuario} from 'src/app/interfaces/usuarios'
import {UsuariosService} from 'src/app/service/usuarios.service'

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  id: number=0;
  constructor(private FormBuilder: FormBuilder ,private http:UsuariosService) {
  }
  nombre:any;
  rut:any;
  //aux:any;
  Agregar = new FormGroup({});
  

  ngOnInit(): void {
    this.Agregar=this.FormBuilder.group({
      nombre: new FormControl('',Validators.required),
      rut: new FormControl('',Validators.required)
    })
  }
  Insetar(){
    this.http.postUsuario(this.rut,this.nombre).subscribe(datos=>{
      console.log(datos);
 })
  }
  Actualizar(){
    this.http.getUsuarios().subscribe(datos=>{
      console.log(datos);
 });}
  Eliminar(){
    this.http.deleteUsuario(this.rut).subscribe(datos=>{
      console.log(datos);
 });
  }
  Modificar(){
    this.http.putUsuario(this.rut,this.nombre).subscribe(datos=>{
      console.log(datos);
 });
  }
  Iniciar(){
    this.http.IniciarUsuario(this.rut).subscribe(datos=>{
      if(datos[0].count=='0'){
        console.log('Usuario no encontrado');
      }else{
        console.log('Usuario encontrado');
      }
 });
    
    //if (this.http.IniciarUsuario(this.rut)==NULL)
  }

}
