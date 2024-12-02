import { Component, OnInit } from '@angular/core';
import { BirdsService } from '../services/birds.service';


@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.page.html',
  styleUrls: ['./birds-list.page.scss'],
})
export class BirdsListPage implements OnInit {
  birds: any[] = [];
  isLoading=true; // Almacenará la lista de aves

  constructor(private birdsService: BirdsService) {}

  ngOnInit() {
    this.getBirds();
  }

  getBirds() {
    this.birdsService.getBirds().subscribe({
      next: (response) => {
        // Mapea la respuesta para extraer solo la información necesaria
        this.birds = response.recordings.map((bird: any) => ({
          name: bird.en, // Nombre del ave
          family: bird.gen, // Género del ave
          location: bird.loc, // Ubicación
          discoverer: bird.rec, // Descubridor
          sound: `${bird.file}`, // URL del archivo de sonido
        }));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar las aves:', error);
        this.isLoading = false;
      },
    });
  }

  playSound(soundUrl: string) {
    const audio = new Audio(soundUrl);
    audio.play();
  }
}