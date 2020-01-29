import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { ArticleService } from './services/article.service';
import { map } from 'rxjs/operators';
import { CategoryService } from './services/category.service';
import { Observable } from 'rxjs';
import { Article } from './domains/article';
import { Category } from './domains/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  title = environment.properties.title;
  logo = environment.properties.logo;
  pinnedArticles: Observable<Article[]>;
  categories: Observable<Category[]>;
  routerlink = 'cards';
  articleLink = 'detail';
  homeParams = { displayNum: 8 };

  constructor(private titleService: Title, private articleService: ArticleService, private categoryService: CategoryService) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.pinnedArticles = this.articleService.getArticles().pipe(map(articles => articles.filter(article => article.pin)));
  }

  getRoutingParams(tag: String): any {
    return { tag: [ tag ] };
  }
}
