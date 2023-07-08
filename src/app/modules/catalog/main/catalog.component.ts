import { Component } from '@angular/core';
import { miniSuccesDialog, successDialog } from 'src/app/layout/components/alert';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  products =  this.generateRange(0, 100);

  addShoppingCart(idProduct: any) {
    miniSuccesDialog("Se agrego al carrito " + idProduct)
  }

  generateRange(start: number, end: number): number[] {
    const range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
  }
}
