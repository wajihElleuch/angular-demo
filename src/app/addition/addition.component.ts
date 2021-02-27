import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.scss']
})
export class AdditionComponent implements OnInit {
  firstNumber: number = 0;
  secondNumber: number = 0;
  result = 0;
  operateur = '+';

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.result = (+this.firstNumber) + (+this.secondNumber);
    switch (this.operateur) {
      case '+':
        this.result = (+this.firstNumber) + (+this.secondNumber);
        break;
      case '-':
        this.result = (+this.firstNumber) - (+this.secondNumber);
        break;
      case '*':
        this.result = (+this.firstNumber) * (+this.secondNumber);
        break;
      case '/':
        this.result = (+this.firstNumber) / (+this.secondNumber);
        break;
    }
  }

  onChangeFirstNumber($event: Event) {
    this.firstNumber = $event.target.value;
    console.log($event.target.value);
  }

  onChangeSecondNumber($event: Event) {
    this.secondNumber = $event.target.value;
  }

  onChangeOperateur($event: Event) {
    this.operateur = $event.target.value;
  }
}
