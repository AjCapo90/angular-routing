import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../core/app.service'

@Component({
  selector: 'app-clients-card',
  templateUrl: './clients-card.component.html',
  styleUrls: ['./clients-card.component.css']
})
export class ClientsCardComponent implements OnInit {
  @Input() user?: User
  @Output() complete = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
