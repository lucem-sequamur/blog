import { Observable } from 'rxjs';

export class Article {
  topic: string;
  tags: string[];
  date: Date;
  filepath: string;
  pin: boolean;
  content: Observable<string>;
}
