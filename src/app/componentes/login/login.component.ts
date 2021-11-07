import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/servicios/backend.service';
import { UtilidadesService } from 'src/app/servicios/utilidades.service';
import{EditarComponent}from '../editar/editar.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any
  password:any
  public usuario:any
  public nombre:any
  constructor(public utils:UtilidadesService, public backend:BackendService, public route:Router) { }

  ngOnInit(): void {
  }
  
  async onSubmit(){
    if(!this.username){
      this.utils.mostrarError('Debe ingresar un usuario')
      return
    }

    if(!this.password){
      this.utils.mostrarError('Debe ingresar una contraseña')
      return
    }

    let data={
      username: this.username,
      password: this.password,
    }
    try {
     
      const respuesta: any=await this.backend.login(data);
      

      if(respuesta.status!=200){
        this.utils.mostrarError(respuesta.mensaje)
        return
      }
      this.utils.mostrarExito(respuesta.mensaje)
      this.utils.guardarSesion(respuesta.persona)
      if(respuesta.persona==1) this.route.navigate(['/admin']);
      if(respuesta.persona==2) this.route.navigate(['/profile']);
      this.usuario=respuesta.usuario
      this.utils.guardarDatos(this.usuario)

    } catch (error) {
      
    }
  }
  
}
