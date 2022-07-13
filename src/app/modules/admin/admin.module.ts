import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
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
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
