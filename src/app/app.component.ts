import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-angular';
  // cardTitle = 'what is angular';
  // cardSubtitle = 'Get a high-level overview of the Angular platform.';
  bgInfo = 'bg-info';
  cardAction = 'Local setup';
  products = [
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
    }
  ];

  visibility(product: { productTitle: string; qte: number; productId: number; productSubtitle: string } | { productTitle: string; qte: number; productId: number; productSubtitle: string } | { productTitle: string; qte: number; productId: number; productSubtitle: string }) {

    // if (product.qte <= 0) {
    //   return {'display': 'none'};
    // } else {
    //   return {'display': 'block'};
    // }
    return product.qte <= 0 ? {'display': 'none'} : {'display': 'block'};

  }

  moreBgColor(qte: number) {
    return qte > 0 ? 'bg-danger' : 'bg-info';
  }
}
