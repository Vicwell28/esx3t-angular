import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/core/services/product/product.service';
import { errorDialog, successDialog } from '../../../alert';
import { IProduct } from 'src/app/core/interfaces/product/IProduct';
import { ProductCategoryService } from 'src/app/core/services/product/product-category.service';
import { IProductCategory } from 'src/app/core/interfaces/product/IProductCategory';

@Component({
  selector: 'app-df-product',
  templateUrl: './df-product.component.html',
  styleUrls: ['./df-product.component.css']
})
export class DialogsFormProductComponent implements OnInit {
constructor(
        public dialogRef: MatDialogRef<DialogsFormProductComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder,
        private ProductsService: ProductService,
       
        private PCategoryService: ProductCategoryService 
      ) {
        // Initialize the form with required fields and set their initial values
        this.fromulario = this.formBuilder.group({
          name: ['', Validators.required],
          description: ['', Validators.required],
          price: ['', Validators.required],
          product_category_id: ['1', Validators.required]
        });
      }


  categorias: IProductCategory[] = []
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
    this.fetchCategories();
  }

  // Fetches the details of an existing category and fills the form
  private fetchProductDetails(id: number): void {
    this.ProductsService.showProduct(id).subscribe({
      next: (response) => {
        const producto: IProduct = response.data as IProduct;
        this.fromulario.patchValue({
          name: producto.name,
          description: producto.description,
          price: producto.price,
          product_category_id: producto.product_category_id
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al obtener la información del producto.');
      },
    });
  }

  private fetchCategories() {
    this.PCategoryService.indexProduct().subscribe({
      next: (response) => {
        const categorias = response.data;
        if (Array.isArray(categorias)) {
          this.categorias = categorias;
        }
      },
    });
  }

  onSubmit(): void {
    if (this.fromulario.invalid) {
      return;
    }

    const product: IProduct = this.fromulario.value;

    this.isLoading = true;

    const request = this.isEdit
      ? this.ProductsService.updateProduct(this.id!, product)
      : this.ProductsService.storeProduct(product);

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


