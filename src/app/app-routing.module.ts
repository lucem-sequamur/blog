import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { CardsComponent } from "./components/cards/cards.component";
import { environment } from "../environments/environment";

const routes: Routes = [
  { path: 'cards', component: CardsComponent, runGuardsAndResolvers: "always" },
  { path: 'detail/:filename', component: ArticleComponent, runGuardsAndResolvers: "always" },
  { path: '**', redirectTo: `/cards?displayNum=${ environment.properties.displayNum }`, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
