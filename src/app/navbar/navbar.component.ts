import {Component, OnInit} from '@angular/core';
import {PannierService} from '../services/pannier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private pannierService: PannierService) {
  }

  qteToBy = 0;

  ngOnInit(): void {
    this.pannierService.getQteToBy().subscribe(value => this.qteToBy = value);
  }

}
