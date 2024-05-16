import { Component } from '@angular/core';

@Component({
  selector: 'products-numbers-page',
  templateUrl: './numbers-page.component.html',
  styles: ``,
})
export class NumbersPageComponent {
  public totalSells: number = 1234567.8945;
  public percent: number = 0.9348;
}
