import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cursos } from './Cursos';
import { environment } from 'src/environments/environment';
<<<<<<< Updated upstream
import { delay, pipe, tap } from 'rxjs';
=======
import { delay, tap } from 'rxjs';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) {}

  lista() {
<<<<<<< Updated upstream
    return this.http.get<Icursos[]>(this.API)
    .pipe(
      delay(2000),
      tap(console.log)
    );
=======
    return this.http
      .get<Cursos[]>(this.API)
      .pipe(delay(2000), tap(console.log));
>>>>>>> Stashed changes
  }
}
