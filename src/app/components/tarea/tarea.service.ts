import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Tarea } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  
  private baseURL="http://localhost:8080/api/tarea";

  constructor(private httpClient: HttpClient) { }
    
  /*async*/ create(data: any) : Observable <any> {
    //return firstValueFrom(this.httpClient.post<Tarea>(this.baseURL, data));
    return this.httpClient.post(`${this.baseURL.concat("/agregar")}`,data);
  }

  async getAll() {
 
    return await firstValueFrom(this.httpClient.get<Tarea[]>(this.baseURL.concat("/tareas")));
    
  }
}
