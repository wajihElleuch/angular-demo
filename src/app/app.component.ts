import {Component} from '@angular/core';
import {ProductsServiceService} from './services/products-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nav = 'H';
  title = 'demo-angular';
  // cardTitle = 'what is angular';
  // cardSubtitle = 'Get a high-level overview of the Angular platform.';
  bgInfo = 'bg-info';
  cardAction = 'Local setup';

  products = this.productsServiceService.getProduct();

  constructor(private productsServiceService: ProductsServiceService) {
  }

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

  deleteCard(product) {
    if (product.qte === 0) {
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);
    } else {
      product.qte--;
    }


  }

  onDeletedCard($event: any) {
    console.log('emited id ', $event);
    const index = this.products.findIndex(product => product.productId === $event);
    this.products.splice(index, 1);
  }

  onSearch($event: Event) {

    this.products = this.productsServiceService.getProduct()
      .filter(product => product.productTitle.toLocaleLowerCase().includes($event.target['value'].toLocaleLowerCase()));

  }
}
