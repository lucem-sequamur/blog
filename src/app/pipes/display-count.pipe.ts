import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayCount'
})
export class DisplayCountPipe implements PipeTransform {

  transform(value: any[], count: number): any[] {
    return (count && count > 0 && value) ? value.slice(0, count) : value;
  }

}
