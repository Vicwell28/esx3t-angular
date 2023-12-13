import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductBrancheService } from 'src/app/core/services/product/product-branche.service';
import { IProductBranch } from 'src/app/core/interfaces/product/IProductBranch';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { User } from 'src/app/core/enums/User';
import { errorDialog, successDialog } from 'src/app/layout/components/alert';
import { UserService } from 'src/app/core/services/user/user.service';
import { IUser } from 'src/app/core/interfaces/user/IUser';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DfOrdenarProductoComponent } from 'src/app/layout/components/df-ordenar-producto/df-ordenar-producto.component';
import { SaleService } from 'src/app/core/services/sale/sale.service';
import { SaleDetailService } from 'src/app/core/services/sale/sale-detail.service';

@Component({
  selector: 'app-catalog-detail',
  templateUrl: './catalog-detail.component.html',
  styleUrls: ['./catalog-detail.component.css'],
})
export class CatalogDetailComponent implements OnInit {
  @ViewChild('scrollableContainer') private scrollableContainer?: ElementRef;

  product!: IProductBranch;
  role = this.localStorageService.getItem('role');
  user!: IUser;
  listProducts!: IProductBranch[];
  dialogRef?: MatDialogRef<DfOrdenarProductoComponent>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productBrancheService: ProductBrancheService,
    private localStorageService: LocalStorageService,
    private userService: UserService,
    private dialog: MatDialog, 
    private saleService: SaleService,
    private saleDetailService: SaleDetailService,
  ) {
    this.questions = Array.from({ length: 10 }, (_, index) => {
      return {
        question: `Texto ${index}`,
        answers: Array.from(
          { length: Math.floor(Math.random() * 10) + 1 },
          (_, answerIndex) => {
            return `Answer ${answerIndex}`;
          }
        ),
      };
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit(): void {
    const id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);

    this.productBrancheService.indexProduct().subscribe({
      next: (value) => {
        let products  = value.data as IProductBranch[];
        console.log(id)
        console.log(products)
        this.product = products.filter((value) => {
          console.log(value.id)
          console.log(id)
          
          return value.id == id;
        })[0] as IProductBranch;
        console.log(this.product);
        console.log("Ese fue el producto")
      },
      complete: () => {
        console.log(`Complete`);
      },
      error: (err) => {
        console.log(`Error: ${err}`);
      },
    });

    this.userService.indexUser('?isAuth=true').subscribe({
      next: (value) => {
        this.user = value.users as IUser;
      },
      complete: () => {
        console.log(`Complete`);
      },
      error: (err) => {
        console.log(`Error: ${err}`);
      },
    });

    this.productBrancheService.indexProduct().subscribe({
      next: (value) => {
        this.listProducts = value.data as IProductBranch[];
        console.log('PRODUCTOS');
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

  Ordernar() {
    if (User.Empleado != this.role) {
      errorDialog('Para ordenar consulta con un empleado');
      return;
    }

    if (this.product.branch.address == this.user.branch!.address) {
      errorDialog(
        'Para hacer una orden se debe estar en una tienda diferente al producto'
      );
      return;
    }

    let productosTienda = this.listProducts.filter((value, index, array) => {
      console.log(
        value.branch.address + ' ======= ' + this.user.branch!.address
      );
      return value.branch.address === this.user.branch!.address;
    });

    console.log(productosTienda);

    let hayAlgunProductoDisponibleEnTienda = productosTienda.some(
      (val, idx, arr) => {
        console.log(val.product.name);
        console.log(this.product.product.name);
        return val.product.name === this.product.product.name;
      }
    );

    console.log(hayAlgunProductoDisponibleEnTienda);

    if (hayAlgunProductoDisponibleEnTienda) {
      errorDialog(
        'Hay producto en stock en la tienda donde intentas hacer la orden'
      );
      return;
    }

    this.openDialog('250ms', '250ms', true, {
      userId: this.user.id,
      product: this.product,
    });
  }

  Comprar() {
    // EN LA COMPRA DE UN PRDUCTO HAY QUE VERIFICAR SI HAY STOCK, SI HAY STOCK HAY AL MOMENTO DE COMPRAR HAY QUE ACTUALIZAR EL STOCK,

    if (this.product.stock == 0) {
      errorDialog('No hay stock en el producto');
      return;
    }

    const sale = {
      client_id: 1, 
      employee_id: 1
    }    

    let min = 1;
    let max = 1000000;
    let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    const detailSale = {
      sale_id: aleatorio,
      products: [
        {
          product_branche_id: this.product.id, 
          quantity: 1
        }
      ], 
      status: true
    }

    this.saleDetailService.storeSale(detailSale).subscribe({
      next: (value) => {
        console.log(value);
        successDialog("El producto se ha comprado correctamente.");
      },
      complete: () => {
        console.log(`Complete`);
      },
      error: (err) => {
        console.log(`Error: ${err}`);
      },
    })

  }

  // Método para abrir el diálogo de edición/creación de categoría de vista
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    isEdit: boolean,
    data: any
  ): void {
    this.dialogRef = this.dialog.open(DfOrdenarProductoComponent, {
      width: '50%',
      height: '90%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        isEdit: isEdit,
        data: data,
      },
    });

    this.dialogRef.afterClosed().subscribe((res) => {
      console.log('Diálogo cerrado');
      console.log('Resultado:', res);
    });
  }

  questions: { question: string; answers: string[] }[];

  generateRange(start: number, end: number): number[] {
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  }
}
