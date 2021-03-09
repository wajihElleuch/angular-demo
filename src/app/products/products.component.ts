import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = this.productsService.getProduct();

  constructor(private productsService: ProductsService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onDeletedCard($event: any) {

  }

  onClick(id) {
    this.router.navigate([`product/${id}`]);
  }
}
