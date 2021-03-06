import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('cardTitle') cardTitle = 'card title';
  @Input('cardSubtitle') cardSubtitle = 'card subtitle';
  @Input('qte') qte = 0;
  @Input('id') id = 0;
  @Input('image') image = '';
  @Output('deletedCard') deletedCardId = new EventEmitter();

  constructor() {
  }

  deleteCard(id) {
    this.deletedCardId.emit(id);
  }
}
