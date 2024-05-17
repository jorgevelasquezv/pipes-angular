import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(
    heroes: Hero[],
    sortBy: keyof Hero | null,
    isSortAsc: boolean = true
  ): Hero[] {
    if (!sortBy) {
      return heroes;
    }

    const asc = isSortAsc ? 1 : -1;

    return [...heroes].sort((a, b) => (a[sortBy] > b[sortBy] ? asc : -asc));
  }
}
