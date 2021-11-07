import { Component, OnInit } from '@angular/core';
import{UtilidadesService}from '../../servicios/utilidades.service';
import{BackendService}from '../../servicios/backend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  user: any={
    name: '',
    gender:'',
    username:'',
    email:'',
    password: ''
  }
  username:any
  usuario:any
  constructor(public utils:UtilidadesService, public backend:BackendService, private router:Router) { }

  ngOnInit(): void {
  }
  async obtener(){
    const editar= await this.utils.enviarDatos(this.usuario)
    this.username=editar['username']
    this.user.name=editar['name']
    this.user.gender=editar['gender']
    this.user.username=editar['username']
    this.user.email=editar['email']
    this.user.password=editar['password']
  }
  async editar(username:any, data:any){
    try {
      
      const respuesta:any= await this.backend.editarUsuario(username, data)
      this.user=[]
      if(respuesta.status!=200){
        this.utils.mostrarError(respuesta.mensaje)
        return
      }
      this.backend.usuarios()
      this.utils.mostrarExito(respuesta.mensaje)
      this.router.navigate(['/home']);
    } catch (error) {
      this.utils.mostrarError('error')
    }
  }
  cerrarSesion(){
    this.utils.eliminarSesion()
    this.router.navigate(['/home']);
  }
  regresar(){
    this.router.navigate(['/profile']);
  }
}
