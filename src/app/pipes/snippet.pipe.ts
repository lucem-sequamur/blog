import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snippet'
})
export class SnippetPipe implements PipeTransform {

  transform(text: string, length: number, pattern: string): string {
    return (text ? String(text).replace(/<[^>]+>/gm, '') : '').substr(0, length) + pattern;
  }

}
