import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit {
  paises: any[] = [];

  constructor(private paisesService: PaisesService) {}

  ngOnInit() {
    this.cargarPaises();
  }

  cargarPaises() {
    this.paisesService.getPaises().subscribe(
      (data) => {
        this.paises = data;
      },
      (error) => {
        console.error('Error al cargar los países:', error);
      }
    );
  }
}
