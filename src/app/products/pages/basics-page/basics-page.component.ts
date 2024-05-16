import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
  public nameLower: string = 'isaac';
  public nameUpper: string = 'ISAAC';
  public fullName: string = 'iSaAc VeLaSqUeZ';
  public customDate: Date = new Date();
}
