import { Component, OnInit } from '@angular/core';
import { Article } from '../../domains/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: [ './articles.component.css' ]
})
export class ArticlesComponent implements OnInit {

  articles: Article[];
  selectedArticle: Article;
  query: string;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }
}
