import { Component } from '@angular/core';
import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reddit';
  articles:Article[];

  constructor () {
    this.articles = [
      new Article('Angular 2', 'https://angular.io/downloads', 5),
      new Article('VueJs 3', 'https://vuejs.org/documentation', 10)
    ]
  }

  addArticle(title: HTMLInputElement, link:HTMLInputElement): boolean{
    console.log(`Adding title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort( (a: Article, b:Article) => b.votes - a.votes);
  }
}
