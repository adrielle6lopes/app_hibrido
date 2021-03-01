import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Artigos', url: '/folder/Inbox', icon: 'home' },
    { title: 'Notícias', url: '/folder/Outbox', icon: 'newspaper' },
    { title: 'Contatos', url: '/folder/Favorites', icon: 'call' },
    { title: 'Sobre', url: '/folder/Archived', icon: 'reader' },
  ];
  constructor() {}
}
