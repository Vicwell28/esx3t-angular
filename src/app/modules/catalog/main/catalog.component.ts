import { AfterViewInit, Component } from '@angular/core';
import { IProductBranch } from 'src/app/core/interfaces/product/IProductBranch';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ProductBrancheService } from 'src/app/core/services/product/product-branche.service';
import {
  errorDialog,
  miniSuccesDialog,
  successDialog,
} from 'src/app/layout/components/alert';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements AfterViewInit {
  searchText: string = '';

  results: IProductBranch[] = [];

  listProducts: IProductBranch[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private productBrancheService: ProductBrancheService
  ) {}

  ngAfterViewInit(): void {
    this.productBrancheService.indexProduct().subscribe({
      next: (value) => {
        this.listProducts = value.data as IProductBranch[];
        this.results = this.listProducts;
        console.log(this.listProducts);
      },
      complete: () => {
        console.log(`Complete`);
      },
      error: (err) => {
        console.log(`Error: ${err}`);
      },
    });
  }

  onKeyUp() {
    if (this.searchText) {
      this.results = this.listProducts.filter((item) => {
        return item.product.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());
      });
    } else {
      this.results = this.listProducts;
    }
  }

  addShoppingCart(idProduct: any) {
    let token = this.localStorageService.getItem('token');

    if (token != null || token != undefined) {
      miniSuccesDialog('Se agrego al carrito ' + idProduct);
      return;
    }

    errorDialog('!Debes iniciar sesion para ordenar este producto¡');
  }

  generateRange(start: number, end: number): number[] {
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }
}
