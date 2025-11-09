import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { Char } from '@interfaces/char.model.js';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private apiUrl = environment.apiUrl;

  private http = inject(HttpClient);

  constructor() { }

  public getChar(char: String): Observable<Char> {
    return this.http.get<Char>(`${this.apiUrl}/external/character/${char}`);
  }
}
