import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/servicios/backend.service';
import { UtilidadesService } from 'src/app/servicios/utilidades.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  name:any 
  gender: any 
  username: any
  email: any
  password:any
        
  constructor(public utils:UtilidadesService, public backend:BackendService, public route:Router) { }

  ngOnInit(): void {
  }
  async onSubmit(){
   
    let usuario={
      name:this.name,
      gender:this.gender,
      username: this.username,
      email:this.email,
      password: this.password
    }
    try {
      const response: any=await this.backend.registro(usuario);

      if(response.status!=200){
        this.utils.mostrarError(response.mensaje)
        return
      }
      this.utils.mostrarExito(response.mensaje)
      
    } catch (error) {
      
    }
  }
}
