import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../domains/article';
import { ArticleService } from '../services/article.service';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'searchArticles'
})
export class SearchArticlesPipe implements PipeTransform {

  constructor(private articleService: ArticleService) { }

  transform(articles: Observable<Article[]>, term: string): Observable<Observable<Article[]>> {
    if (!term || term.trim().length === 0 )
      return of(articles);

    term = term.trim().toLowerCase();

    return articles.pipe(map(articleList => {
      const founds: Observable<Article>[] = [];
      articleList.forEach(article => {
        if (article.topic.trim().toLowerCase().includes(term)){
          founds.push(of(article));
        } else {
          founds.push(this.articleService.loadArticle(article).pipe(map(content => {
            return content.toLowerCase().includes(term) ? article : null;
          })));
        }
      });
      return forkJoin(founds).pipe(
        map(articles => articles.filter(article => article))
      );
    }));
  }
}
