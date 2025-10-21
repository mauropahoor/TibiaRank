import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';   

interface HelloResponse {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public message = 'Carregando mensagem do backend...';

  private http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<HelloResponse>('/api/hello')
      .subscribe({
        next: (response) => {
          // Sucesso!
          this.message = response.message;
        },
        error: (err) => {
          // Erro
          this.message = 'Falha ao conectar com o backend :(';
          console.error(err);
        }
      });
  }
}