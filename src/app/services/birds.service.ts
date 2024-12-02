import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BirdsService {
  private apiUrl = 'https://xeno-canto.org/api/2/recordings?query=cnt:guatemala';

  constructor(private http: HttpClient) {}

  // Método para obtener las aves desde la API
  getBirds(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

