import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CharacterData } from '../../interfaces/char.model'; // Importe seu modelo

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, RouterLink], // Adicionamos RouterLink para links futuros
  templateUrl: './character-card.html',
  styleUrl: './character-card.css'
})
export class CharacterCardComponent {
  // 'Input()' permite que o componente pai (Home) passe dados para esta variável
  @Input() character: CharacterData | null = null;
}