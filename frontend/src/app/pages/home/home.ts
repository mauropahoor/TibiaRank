// Imports RxJS (forkJoin) e o novo Card
import { Component, inject, afterNextRender, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { forkJoin, Observable } from 'rxjs'; // Importe o forkJoin!

// Imports de Serviços e Modelos
import { Api } from '@services/api';
import { CharacterData, Char, CharacterDetails } from '@interfaces/char.model';

import { CharacterCardComponent } from '@components/character-card/character-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home { 

  private api = inject(Api); 
  private cdr = inject(ChangeDetectorRef);

  public characters: CharacterData[] = []; 
  public isLoading = true;
  public error: string | null = null;

  charNames = ['Monst Sane', 'Palli Zughy', 'Royal Neves', 'Mirtina', 'Druid Campos', 'Bill Wood'];

  constructor() {
    afterNextRender(() => {
      this.fetchRanking();
    });
  }

  fetchRanking(): void {
    const fetchObservables: Observable<Char>[] = this.charNames.map(name => {
      return this.api.getChar(name); 
    });

    forkJoin(fetchObservables).subscribe({
      next: (responses: Char[]) => {
        console.log('Respostas recebidas:', responses);
        
        this.characters = this.mergeSort(responses.map(res => res.character));
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

  mergeSort(array: any[]): any[] {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
    return this.merge(this.mergeSort(leftHalf), this.mergeSort(rightHalf));
  }

  merge(left: CharacterData[], right: CharacterData[]): CharacterData[] {
      let result: any[] = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length &&
          rightIndex < right.length) {
          if (left[leftIndex].character.level > right[rightIndex].character.level) {
              result.push(left[leftIndex]);
              leftIndex++;
          } else {
              result.push(right[rightIndex]);
              rightIndex++;
          }
      }

      return result.concat(left.slice(leftIndex)).
          concat(right.slice(rightIndex));
  }
}