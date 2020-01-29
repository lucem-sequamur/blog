import { Injectable } from '@angular/core';
import { Article } from '../domains/article';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleList = environment.properties.contentRegistry;
  private articles = environment.properties.contentRoot;

  constructor(private http: HttpClient) { }

  getArticles(tags?: string[], number?: number): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleList).pipe(
      map(articles => {
        if (tags ? tags.length > 0 : false) {
          articles = articles.filter(article => article.tags.find(articleTag => tags.find(tag => tag === articleTag)));
        }
        articles.sort((a, b) => a.date > b.date ? -1 : 1);
        if (number ? number > 0 : false) {
          articles = articles.slice(0, number);
        }
        articles.forEach(article => article.content = this.loadArticle(article));
        return articles;
      }),
      catchError(error => {
        console.error(error);
        return EMPTY;
      })
    );
  }

  getArticle(filename: string): Observable<Article> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.filepath === filename))
    );
  }

  loadArticle(article: Article): Observable<string> {
    return this.http.get(`${ this.articles }/${ article.filepath }`, { responseType: 'text' }).pipe(
      catchError(error => {
        console.error(error);
        return EMPTY;
      })
    )
  }
}
