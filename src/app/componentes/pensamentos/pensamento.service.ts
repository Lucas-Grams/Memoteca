import { Pensamento } from './pensamento';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  listar():Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamento :Pensamento):Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluirPensamento(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPensamento(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }


}
