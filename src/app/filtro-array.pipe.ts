import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray',
})
export class FiltroArrayPipe implements PipeTransform {
  transform(value: any[], filter: string): any[] {
    if (!value || value.length === 0 || !filter) {
      return value;
    }

    filter = filter.toLowerCase();
    return value.filter(item => item.toLowerCase().includes(filter));
  }
}
