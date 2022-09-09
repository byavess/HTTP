import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosService } from './cursos.service';
import { Icursos } from './Icursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  preserveWhitespaces: true,
})
export class CursosComponent implements OnInit {
  //cursos!: Icursos[];
  cursos$!: Observable<Icursos[]>;

  constructor(private service: CursosService) {}

  ngOnInit(): void {
    // this.service.lista().subscribe((dados) => (this.cursos = dados));
    this.cursos$ = this.service.lista();
  }
}
