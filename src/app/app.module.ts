import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleComponent } from './components/article/article.component';
import { CardsComponent } from "./components/cards/cards.component";
import { SearchArticlesPipe } from './pipes/search-articles.pipe';
import { SnippetPipe } from './pipes/snippet.pipe';
import { SrcRebasePipe } from './pipes/src-rebase.pipe';
import { DisplayCountPipe } from './pipes/display-count.pipe';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    CardsComponent,
    SearchArticlesPipe,
    SnippetPipe,
    SrcRebasePipe,
    SrcRebasePipe,
    DisplayCountPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
