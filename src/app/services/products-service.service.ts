import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() {
  }

  getProduct() {
    //call backEnd
    return [
      {
        productId: 1,
        productTitle: 'TV',
        productSubtitle: 'full hd',
        qte: 0
      },
      {
        productId: 2,
        productTitle: '8assela',
        productSubtitle: 'automatik 9kg',
        qte: 2
      },
      {
        productId: 3,
        productTitle: 'micro-onde',
        productSubtitle: '300w blue ',
        qte: 1
      },
      {
        productId: 4,
        productTitle: 'blabla',
        productSubtitle: 'blublu ',
        qte: 1
      }
    ];
  }
}
