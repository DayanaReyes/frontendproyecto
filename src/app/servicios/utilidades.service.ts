import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {
  data:any
  private SESSION_COOKIE='sesion'
  
  private toast =Swal.mixin({
    toast:true,
    position:'top',
    showConfirmButton:false,
    timer:2000,
    timerProgressBar:false,
    onOpen:(toast)=>{
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseenter', Swal.resumeTimer)

    }
    
  })

  constructor(private cookie:CookieService) { }

  guardarSesion(data:any){
    this.cookie.set(this.SESSION_COOKIE,data,1,'/')
  }

  obtenerSesion(){
    if(this.cookie.check(this.SESSION_COOKIE)){
      return this.cookie.get(this.SESSION_COOKIE)
    }
    return undefined
  }
  eliminarSesion(){
    this.cookie.delete(this.SESSION_COOKIE,'/')
  }

  

  mostrarError(mensaje: string){
    this.toast.fire({
      icon:'error',
      title: mensaje
    })
  }

  mostrarExito(mensaje: string){
    this.toast.fire({
      icon: 'success',
      title: mensaje
    })
  }

  guardarDatos(data:any){
    this.data=data
    console.log(this.data)
  }
  enviarDatos(recibir:any){
    recibir=this.data
    return recibir
  }
}

  
