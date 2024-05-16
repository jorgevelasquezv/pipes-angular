import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: ``,
})
export class UncommonPageComponent {
  //i18nSelect
  public name: string = 'Isaac';
  public gender: 'male' | 'female' = 'male';
  public invitationMap: { [key: string]: string } = {
    male: 'Mr.',
    female: 'Mrs.',
  };

  public changeClient(): void {
    this.name = this.name === 'Isaac' ? 'Katherine' : 'Isaac';
    this.gender = this.gender === 'male' ? 'female' : 'male';
  }

  //i18nPlural
  public clients: string[] = [
    'Isaac',
    'Katherine',
    'Luis',
    'Ana',
    'María',
    'José',
    'Pedro',
    'Juan',
    'Diana',
    'Laura',
  ];
  public clientsMap: { [key: string]: string } = {
    '=0': 'no clients',
    '=1': 'one client',
    other: '# clients',
  };

  public deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Isaac',
    age: 35,
    address: 'Calle 123, Colonia Centro',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('Timer executed', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3500);
  });
}
