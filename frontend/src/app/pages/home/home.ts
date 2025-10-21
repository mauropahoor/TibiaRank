import { Component, inject, afterNextRender, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { Api } from '../../services/api';
import { Char } from '../../interfaces/char.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { 

  private api = inject(Api); 
  private cdr = inject(ChangeDetectorRef);

  public chars: Char[] = [];
  
  constructor() {
    afterNextRender(() => {
      this.api.getChar()
        .subscribe({
          next: (data) => {
            console.log('Dados recebidos:', data);
            this.chars = data;
            
            this.cdr.markForCheck();
          },
          error: (err) => {
            console.error('Falha ao buscar itens', err);
          }
        });
    });
  }
}