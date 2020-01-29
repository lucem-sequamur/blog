import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Article } from '../../domains/article';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.css' ]
})
export class ArticleComponent implements OnInit, OnDestroy {
  navigationSubscription: Subscription;
  @Input() article: Article;

  constructor(private route: ActivatedRoute, private articleService: ArticleService, private location: Location, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    const filename = this.route.snapshot.paramMap.get('filename');
    if (filename) {
      this.articleService.getArticle(filename)
        .subscribe(article => this.article = article);
    }
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  goBack(): void {
    this.location.back();
  }
}
