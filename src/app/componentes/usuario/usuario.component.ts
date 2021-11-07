import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilidadesService } from 'src/app/servicios/utilidades.service';
import{LoginComponent}from'../login/login.component';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  editarusuario: any
  usuario:LoginComponent | undefined
  constructor(public utils:UtilidadesService, private router:Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    this.utils.eliminarSesion()
    this.router.navigate(['/home']);
  }
  editar(){
    this.editarusuario=this.usuario?.usuario
    this.router.navigate(['/editar']);
  }

}
