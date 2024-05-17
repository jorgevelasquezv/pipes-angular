import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean = false) {
    return value ? 'can fly' : 'cannot fly';
  }
}
