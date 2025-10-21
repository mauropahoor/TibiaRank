import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { Char } from '../interfaces/char.model.js';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = '/api';

  private http = inject(HttpClient);

  constructor() { }

  public getChar(char: String): Observable<Char> {
    return this.http.get<Char>(`${this.apiUrl}/external/character/${char}`);
  }
}
