import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../domains/article';
import { Observable, Subscription } from "rxjs";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { ArticleService } from "../../services/article.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: [ './cards.component.css' ]
})
export class CardsComponent implements OnInit, OnDestroy {
  navigationSubscription: Subscription;
  articles: Observable<Article[]>;
  @Input() private tags: string[];
  @Input() displayNum: number;
  query: string;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.displayNum = Number(this.route.snapshot.queryParamMap.get('displayNum'));
    this.tags = this.route.snapshot.queryParamMap.getAll('tag');
    this.articles = this.articleService.getArticles(this.tags);
  }

  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
