// 1. Importe o 'ChangeDetectorRef'
import { Component, inject, afterNextRender, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { Api } from '../../services/api';
import { CharacterData } from '../../interfaces/char.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { 

  private api = inject(Api); 
  private cdr = inject(ChangeDetectorRef); // 2. Injete o 'ChangeDetectorRef'

  public character: CharacterData | null = null;
  public isLoading = true;
  public error: string | null = null;

  charName = 'Monst Sane';

  constructor() {
    afterNextRender(() => {
      this.api.getChar(this.charName).subscribe({
        next: (response) => {
          console.log('Resposta recebida:', response);
          this.character = response.character;
          this.isLoading = false;

          // 3. FORÇA A ATUALIZAÇÃO DA TELA
          this.cdr.markForCheck();
        },
        error: (err) => {
          console.error('Falha ao buscar detalhes', err);
          this.isLoading = false;
          this.error = 'Personagem não encontrado ou falha na API.';

          // (Boa prática forçar a atualização no erro também)
          this.cdr.markForCheck();
        }
      });
    });
  }
}