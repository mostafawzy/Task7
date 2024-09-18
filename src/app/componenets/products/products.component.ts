import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productList: any[] = [];
  constructor(private productServ: ProductService) {}

  ngOnInit() {
    this.productList = this.productServ.getItemList();
    console.log(this.productList);
    
  }

}

