import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/servicios/backend.service';
import { UtilidadesService } from 'src/app/servicios/utilidades.service';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @ViewChild('content', {static:false}) el!:ElementRef;
  usuario: any={
    name: '',
    gender:'',
    username:'',
    email:'',
    password: ''
  }
  
  username:any

  constructor(public utils:UtilidadesService, private router:Router, public backend:BackendService) { }

  async ngOnInit(): Promise <void> {
    await this.mostrarUsuarios()

  }

  cerrarSesion(){
    this.utils.eliminarSesion()
    this.router.navigate(['/home']);
  }

  async mostrarUsuarios(){
    try {
      const respuesta:any= await this.backend.usuarios()
      this.usuario=respuesta.usuario
    } catch (error) {
      
    }
  }
  async eliminar(username:any){
    try {
      const respuesta:any= await this.backend.eliminarUusario(username)
      await this.mostrarUsuarios()
      if(respuesta.status!=200){
        this.utils.mostrarError(respuesta.mensaje)
        return
      }
      this.backend.usuarios()
      this.utils.mostrarExito(respuesta.mensaje)
    } catch (error) {
      
    }
  }

  async editar(username:any, data:any){
    try {
      
      const respuesta:any= await this.backend.editarUsuario(username, data)
      this.selectedUsuario=[]
      await this.mostrarUsuarios()
      if(respuesta.status!=200){
        this.utils.mostrarError(respuesta.mensaje)
        return
      }
      this.backend.usuarios()
      this.utils.mostrarExito(respuesta.mensaje)
    } catch (error) {
      this.utils.mostrarError('error')
    }
  }
  selectedUsuario:any=[]
  async seleccionar(usuario:any){
    this.selectedUsuario=usuario
    this.username=this.selectedUsuario['username']
  }
  
  exportarPDF(){
    let pdf=new jsPDF('l','pt');
    const data=this.el.nativeElement
    pdf.html(data.innerHTML,{
      callback: (pdf)=>{
        pdf.text( 'Lista de Usuarios ' ,380, 30 ) ;
        pdf.save('Usuario.pdf');
      }
    })
  }
  cargar(){
    this.router.navigate(['/cargar']);
  }
}
