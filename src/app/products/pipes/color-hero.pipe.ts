import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorHero',
})
export class ColorHeroPipe implements PipeTransform {
  transform(value: number): string {
    return Color[value];
  }
}
