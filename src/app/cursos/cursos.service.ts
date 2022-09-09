import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icursos } from './Icursos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = `${environment.API}cursos `;

  constructor(private http: HttpClient) {}

  lista() {
    return this.http.get<Icursos[]>(this.API);
  }
}
