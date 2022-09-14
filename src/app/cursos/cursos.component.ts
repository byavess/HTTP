import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CursosService } from './cursos.service';
import { Cursos } from './Cursos';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  preserveWhitespaces: true,
})
export class CursosComponent implements OnInit {
  //cursos!: Icursos[];
  cursos$!: Observable<Cursos[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CursosService
  ) {}

  ngOnInit(): void {
    // this.service.lista().subscribe((dados) => (this.cursos = dados));
    this.cursos$ = this.service.lista();
  }
}
