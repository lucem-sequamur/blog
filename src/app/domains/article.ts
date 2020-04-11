import { Observable } from 'rxjs';

export class Article {
  constructor(public topic: string, public date: Date, public tags: string[], public filepath: string, public pin: boolean, public content: Observable<string>) { }
}
