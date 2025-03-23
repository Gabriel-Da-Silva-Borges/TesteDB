import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragoesService {
  private api = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
  constructor(private http: HttpClient) { }

  lista(): Observable<any> {
    return this.http.get(`${this.api}`);
  }
 
  dados(id: number): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }
 
  salvar(dados: any): Observable<any> {
    return this.http.post(`${this.api}`, dados);
  }

  editar(dados: any, id: number): Observable<any> {
    return this.http.put(`${this.api}/${id}`, dados);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
