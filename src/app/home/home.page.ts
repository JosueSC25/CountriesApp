import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  nombre: string = '';
  carnet: string = '';

  constructor(private router: Router) {}

  irAPaises() {

      this.router.navigate(['/paises']);

  }
}
