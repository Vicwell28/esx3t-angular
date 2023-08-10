import {ProductBrancheService} from '../../../../../core/services/product/product-branche.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/core/interfaces/product/IProduct';
import { ProductCategoryService } from 'src/app/core/services/product/product-category.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { errorDialog, successDialog } from '../../../alert';
import { BrancheService } from 'src/app/core/services/branche/branche.service';
import { IBranch } from 'src/app/core/interfaces/branche/IBranch';
import { IProductBranch } from 'src/app/core/interfaces/product/IProductBranch';

@Component({
  selector: 'app-df-product-branche',
  templateUrl: './df-product-branche.component.html',
  styleUrls: ['./df-product-branche.component.css']
})
export class DialogsFormProductBrancheComponent  implements OnInit {
  constructor(
          public dialogRef: MatDialogRef<DialogsFormProductBrancheComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any,
          private formBuilder: FormBuilder,
          private ProductsService: ProductService,
          private BranchService: BrancheService,
          private ProductBrancheService:ProductBrancheService
        ) {
          // Initialize the form with required fields and set their initial values
          this.fromulario = this.formBuilder.group({
            stock: ['', Validators.required],
            product_id: ['', Validators.required],
            branche_id: ['', Validators.required],
           
          });
        }
  
  
    branches: IBranch[] = []
    products: IProduct[] = []
    // Indicates whether an existing category is being edited
    isEdit = false;
    // ID of the category in case of edit
    id: number | undefined;
    // Form for category data
    fromulario: FormGroup;
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
      this.title = this.isEdit ? 'Actualizar Producto' : 'Agregar Producto';
  
      // If editing an existing category, fetch its details and fill the form
      if (this.isEdit) {
        this.fetchProductDetails(this.id!);
      }
      this.fetchProducts();
      this.fetchBranch();
    }
  
  
    // Fetches the details of an existing category and fills the form
    private fetchProductDetails(id: number): void {
      this.ProductBrancheService.showProduct(id).subscribe({
        next: (response) => {
          const branch: IProductBranch = response.data as IProductBranch;
          this.fromulario.patchValue({
            stock: branch.stock,
            product_id: branch.product_id,
            branche_id: branch.branche_id
          });
        },
        error: (err) => {
          console.log(`Error: ${err}`);
          errorDialog('Hubo un error al obtener la información del producto.');
        },
      });
    }
  
    private fetchBranch() {
      this.BranchService.indexBranches().subscribe({
        next: (response) => {
          const branches = response.data;
          if (Array.isArray(branches)) {
            this.branches = branches;
          }
        },
      });
    }

    private fetchProducts() {
      this.ProductsService.indexProduct().subscribe({
        next: (response) => {
          const products = response.data;
          if (Array.isArray(products)) {
            this.products = products;
          }
        },
      });
    }
  
    onSubmit(): void {
      if (this.fromulario.invalid) {
        return;
      }
  
      const product: IProductBranch = this.fromulario.value;
  
      this.isLoading = true;
  
      const request = this.isEdit
        ? this.ProductBrancheService.updateProduct(this.id!, product)
        : this.ProductBrancheService.storeProduct(product);
  
      request.subscribe({
        next: (response) => {
          console.log(`Next: ${response}`);
  
          const successMessage = this.isEdit
            ? 'Se actualizó el producto correctamente.'
            : 'Se agregó el producto correctamente.';
          successDialog(successMessage, () => {
            this.onClose();
          });
        },
        error: (err) => {
          console.log(`Error: ${err}`);
          errorDialog('Hubo un error al procesar la información.');
        },
        complete: () => {
          console.log(`Complete`);
          this.isLoading = false;
        },
      });
    }
  
    // Closes the dialog
    onClose(): void {
      this.dialogRef.close();
    }
}
