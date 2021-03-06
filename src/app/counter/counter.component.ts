import {Component, Input, OnInit} from '@angular/core';
import {PannierService} from '../services/pannier.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input('qte') qte: number;
  qteToBy = 0;

  constructor(private pannierService: PannierService) {
  }

  ngOnInit(): void {
  }

  decrement() {
    this.qteToBy--;
    this.pannierService.decrement();
  }

  increment() {

    this.qteToBy++;
    this.pannierService.increment();
  }
}
