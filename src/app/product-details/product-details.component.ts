import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService) {
  }

  productById: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.productById = this.productsService.getProductById(+value.id);
      console.log(this.productById);
      console.log(value);
    });
  }

}
