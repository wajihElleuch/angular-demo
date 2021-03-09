import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  const;
  PRODUCTS = [
    {
      productId: 1,
      productTitle: 'TV',
      productSubtitle: 'full hd',
      qte: 0,
      img: 'assets/images/product2.jpg'
    },
    {
      productId: 2,
      productTitle: '8assela',
      productSubtitle: 'automatik 9kg',
      qte: 2,
      img: 'https://image.shutterstock.com/image-illustration/various-electric-products-on-store-260nw-652532575.jpg'
    },
    {
      productId: 3,
      productTitle: 'micro-onde',
      productSubtitle: '300w blue ',
      qte: 1,
      img: 'https://image.shutterstock.com/image-illustration/various-electric-products-on-store-260nw-652532575.jpg'
    },
    {
      productId: 4,
      productTitle: 'blabla',
      productSubtitle: 'blublu ',
      qte: 1,
      img: 'https://image.shutterstock.com/image-illustration/various-electric-products-on-store-260nw-652532575.jpg'
    }
  ];

  constructor() {
  }

  getProduct() {
    //call backEnd
    return this.PRODUCTS;
  }

  getProductById(id) {
    return this.PRODUCTS.find(value => {
      return value.productId === id;
    });
  }
}
