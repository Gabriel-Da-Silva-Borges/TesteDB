import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragoesService {
  private api = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
  constructor(private http: HttpClient) { }

  lista(){
    this.http.get(this.api).subscribe(response =>{
      return response
    })
  }
}
