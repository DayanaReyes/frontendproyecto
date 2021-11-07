import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  URL='https://backendproyectoipc.herokuapp.com/'
  constructor(private http: HttpClient) { }

  async login(data:any){
    return this.http.post(`${this.URL}/login`,data).toPromise();
  }
  async registro(data: any){
    return this.http.post(`${this.URL}/registro`,data).toPromise();
  }
  async usuarios(){
    return this.http.get(`${this.URL}/usuarios`).toPromise();
  }
  async eliminarUusario(username:any){
    return this.http.delete(`${this.URL}/borrar/${username}`).toPromise();
  }
  async editarUsuario(username:any, data:any){
    return this.http.put(`${this.URL}/editar/${username}`,data).toPromise();
  }
}
