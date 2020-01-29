import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'srcRebase'
})
export class SrcRebasePipe implements PipeTransform {

  transform(html: string): string {
    return (html ? String(html).replace('src="./', 'src="assets/contents/') : '');
  }

}
