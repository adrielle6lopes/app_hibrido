import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  // 3) Atributos

  // APIKey obtida de 'newsapi.org'
  private apiKey = '19710185b5a64e28a6cf13ad90b05274';

  // Palavra chave das buscas
  private apiQuery = 'felinos';

  // Quantas notícias serão exibidas
  private apiItens = 10;

  // Endereço do request da API
  private apiURL = `https://newsapi.org/v2/everything?apiKey=${this.apiKey}&source=google-news-br&language=pt&q=${this.apiQuery}`;

  // Armazena as notícias para a 'view'
  public newsList: any;

  constructor(

    // 2) Injeta dependências
    private http: HttpClient
  ) { }

  ngOnInit() {

    // 4) Obtém as notícias da API REST (JSON) usando HTTP
   this.http.get(this.apiURL).subscribe(
     (data: any) => {

        // 5) Atribui notícias à 'view'
        this.newsList = data.articles.slice(0, this.apiItens);
      }
    )
  }

  // 6) Acessa site da nóticia
  readNews(link: string) {
    window.open(link);
    return false;
  }

}