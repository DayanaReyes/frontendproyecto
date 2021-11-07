import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilidadesService } from 'src/app/servicios/utilidades.service';



@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

  constructor(public utils:UtilidadesService, private router:Router) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    this.utils.eliminarSesion()
    this.router.navigate(['/home']);
  }
  regresar(){
    this.router.navigate(['/admin']);
  }

  
}
