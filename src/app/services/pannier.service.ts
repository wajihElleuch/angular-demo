import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PannierService {
  qteToBy: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  qte = 0;

  constructor() {
  }

  increment() {
    this.qte++;
    this.qteToBy.next(this.qte);
  }

  decrement() {
    this.qte--;
    this.qteToBy.next(this.qte);
  }

  setQteToBy(qte: number) {
    this.qteToBy.next(qte);
  }

  getQteToBy(): Observable<number> {
    return this.qteToBy.asObservable();
  }
}
