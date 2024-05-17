import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { ColorHeroPipe } from './pipes/color-hero.pipe';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    CanFlyPipe,
    ColorHeroPipe,
    NumbersPageComponent,
    OrderComponent,
    ToggleCasePipe,
    UncommonPageComponent,
    SortByPipe,
  ],
  imports: [CommonModule, PrimeNgModule, ProductsRoutingModule],
})
export class ProductsModule {}
