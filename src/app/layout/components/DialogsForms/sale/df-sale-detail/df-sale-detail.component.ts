import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { errorDialog, successDialog } from '../../../alert';
import { IUser } from 'src/app/core/interfaces/user/IUser';
import { IProductBranch } from 'src/app/core/interfaces/product/IProductBranch';
import { SaleDetailService } from 'src/app/core/services/sale/sale-detail.service';
import { SaleDetail } from 'src/app/core/interfaces/sale/ISaleDetail';
import { ProductBrancheService } from 'src/app/core/services/product/product-branche.service';
import { ISale } from 'src/app/core/interfaces/sale/ISale';
import { SaleService } from 'src/app/core/services/sale/sale.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-df-sale-detail',
  templateUrl: './df-sale-detail.component.html',
  styleUrls: ['./df-sale-detail.component.css', '../../df-style.css'],
})
export class DialogsFormSaleDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogsFormSaleDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private saleDetailService: SaleDetailService,
    private saleService: SaleService,
    private productBrService: ProductBrancheService,
    @Inject(DOCUMENT) document: Document
  ) {
    // this.fetchProducts()
    // Initialize the form with required fields and set their initial values
    this.myForm = this.formBuilder.group({
      sale_id: [1, Validators.required],
      product_branche_id: [1, Validators.required],
      quantity: [1, Validators.required],
    });
  }

  productBranche: IProductBranch[] = [];
  sales: ISale[] = [];
  // Indicates whether an existing category is being edited
  isEdit = false;
  // ID of the category in case of edit
  id: number | undefined;
  // Form for category data
  myForm: FormGroup;
  // Text for the action button
  textButton = '';
  // Indicates if a loading action is in progress
  isLoading = false;
  // Text for the form title
  title?: string;

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    this.id = this.data.id;
    this.textButton = this.isEdit ? 'Confirmar Cambios' : 'Agregar';
    this.title = this.isEdit
      ? 'Actualizar detalles de venta '
      : 'Agregar detalles de venta ';

    this.getSales();
    this.getProducts();
  }

  getSales() {
    this.saleService.indexSale().subscribe({
      next: (response) => {
        console.log(`saleService: ${response}`);
        console.log(response);

        this.sales = response.data as ISale[];
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al procesar la información.');
      },
      complete: () => {
        console.log(`Complete`);
      },
    });
  }

  getProducts() {
    this.productBrService.indexProduct().subscribe({
      next: (response) => {
        console.log(`productBrService: ${response}`);
        console.log(response);

        this.productBranche = response.data as IProductBranch[];
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al procesar la información.');
      },
      complete: () => {
        console.log(`Complete`);
      },
    });
  }

  private fetch(id: number) {
    this.saleDetailService.showSale(id).subscribe({
      next: (response) => {
        const sale: SaleDetail = response.data as SaleDetail;
        this.myForm.patchValue({
          sale_id: sale.sale_id,
          checkboxes: new FormArray([]),
          // product_branche_id: sale.product_branche_id,
          quantity: sale.quantity,
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al obtener la información de la categoría.');
      },
    });
  }

  private fetchSales() {
    this.saleService.indexSale().subscribe({
      next: (response) => {
        const sales = response.data;
        if (Array.isArray(sales)) {
          console.log('p; ', sales);
          this.sales = sales;
        }
      },
    });
  }

  private fetchProducts() {
    this.productBrService.indexProduct().subscribe({
      next: (response) => {
        const products = response.data;
        if (Array.isArray(products)) {
          console.log('p; ', products);
          this.productBranche = products;
        }
      },
    });
  }

  productsSelected: any[] = [];

  onCheckboxChange(event: any, product_id: number) {
    const selected = this.myForm.controls['checkboxes'] as FormArray;
    if (event.target.checked) {
      selected.push(new FormControl(event.target.value));
      this.productsSelected.push({ product_id: product_id });
    } else {
      const index = selected.controls.findIndex(
        (x) => x.value === event.target.value
      );
      selected.removeAt(index);
      const psIndex = this.productsSelected.findIndex(
        (x) => x.product_id === product_id
      );
      this.productsSelected.splice(psIndex, 1);
    }
  }

  // Submits the form to either update an existing category or store a new one
  // onSubmit(): void {
  //   const products:any[] = [];
  //   this.productsSelected.forEach(product => {
  //     const quantityInp = document.getElementById(`product-${product.product_id}`) as HTMLInputElement
  //     if(quantityInp!== null){
  //       products.push({
  //         product_branche_id: product.product_id,
  //         quantity:quantityInp.value
  //       })
  //     }
  //   });

  //   const category: SaleDetail = this.myForm.value;

  //   category.products = products;
  //   this.isLoading = true;

  //   const request = this.isEdit
  //     ? this.saleDetailService.updateSale(this.id!, category)
  //     : this.saleDetailService.storeSale(category);

  //   request.subscribe({
  //     next: (response) => {
  //       console.log(`Next: ${response}`);

  //       const successMessage = this.isEdit ? 'Se actualizó la venta correctamente.' : 'Se agregó la venta correctamente.';
  //       successDialog(successMessage, () => {
  //         this.onClose();
  //       });
  //     },
  //     error: (err) => {
  //       console.log(`Error: ${err}`);
  //       errorDialog('Hubo un error al procesar la información.');
  //     },
  //     complete: () => {
  //       console.log(`Complete`);
  //       this.isLoading = false;
  //     },
  //   });
  // }

  onSubmit(): void {
    console.log(this.myForm.value);
    console.log(this.myForm.value.product_branche_id);
    console.log(this.myForm.value.quantity);
    console.log(this.myForm.value.sale_id);

    const sale = {
      sale_id: Number.parseInt(this.myForm.value.sale_id),
      products: [
        {
          product_branche_id: Number.parseInt(
            this.myForm.value.product_branche_id
          ),
          quantity: Number.parseInt(this.myForm.value.quantity),
        },
      ],
    };

    console.log(sale);

    //VERFICAR QUE EL PRODUCTO NO SE MAYOR AL STOCK

    let products = this.productBranche.filter(
      (val) => val.id == this.myForm.value.product_branche_id
    );

    if (products.length == 0) {
      console.log('mayor a uno ');
      return;
    }

    let product = products[0];

    if (product.stock < this.myForm.value.quantity) {
      errorDialog('NO HAY STOCK SUFICIENTE');
      return
    }

    this.saleDetailService.storeSale(sale).subscribe({
      next: (response) => {
        console.log(`productBrService: ${response}`);
        console.log(response);
        successDialog('Se agrego la venta correctamente', () => {
          this.onClose();
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al procesar la información.');
      },
      complete: () => {
        console.log(`Complete`);
      },
    });
  }

  // Closes the dialog
  onClose(): void {
    this.dialogRef.close();
  }
}
