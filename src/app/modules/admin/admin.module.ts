import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { ClientsCardComponent } from './components/clients-card/clients-card.component';


@NgModule({
  declarations: [
    ClientsListComponent,
    MenuComponent,
    ClientsCardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
