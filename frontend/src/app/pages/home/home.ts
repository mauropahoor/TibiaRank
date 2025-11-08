// Imports RxJS (forkJoin) e o novo Card
import { Component, inject, afterNextRender, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { forkJoin, Observable } from 'rxjs'; // Importe o forkJoin!

// Imports de Serviços e Modelos
import { Api } from '@services/api';
import { CharacterData, Char } from '@interfaces/char.model';

import { CharacterCardComponent } from '@components/character-card/character-card';

@Component({
  selector: 'app-home',
  standalone: true,
  // 1. ADICIONE O NOVO COMPONENTE AQUI
  imports: [CommonModule, CharacterCardComponent], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { 

  private api = inject(Api); 
  private cdr = inject(ChangeDetectorRef);

  // 2. MUDAMOS DE UM OBJETO PARA UM VETOR
  public characters: CharacterData[] = []; 
  public isLoading = true;
  public error: string | null = null;

  // 3. ESTE AGORA É UM VETOR DE NOMES
  charNames = ['Monst Sane', 'Palli Zughy', 'Veyllor']; // Adicione os nomes que desejar

  constructor() {
    afterNextRender(() => {
      this.fetchRanking();
    });
  }

  fetchRanking(): void {
    // 4. CRIA UM VETOR DE "PROMESAS" (OBSERVABLES)
    // Para cada nome no vetor 'charNames', ele chama a API
    const fetchObservables: Observable<Char>[] = this.charNames.map(name => {
      // (Assumindo que 'getChar' é seu método que busca por nome)
      return this.api.getChar(name); 
    });

    // 5. USA 'forkJoin' PARA EXECUTAR TODAS AS CHAMADAS EM PARALELO
    forkJoin(fetchObservables).subscribe({
      next: (responses: Char[]) => {
        console.log('Respostas recebidas:', responses);
        
        // Extraímos o '.character' de cada resposta
        this.characters = responses.map(res => res.character);
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error('Falha ao buscar um ou mais personagens', err);
        this.isLoading = false;
        this.error = 'Falha ao carregar o ranking.';
        this.cdr.markForCheck();
      }
    });
  }
}