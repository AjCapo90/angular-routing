import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    ClientsListComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
