import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/core/interfaces/product/IProduct';
import { IProductCategory } from 'src/app/core/interfaces/product/IProductCategory';
import { ProductCategoryService } from 'src/app/core/services/product/product-category.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { errorDialog, successDialog } from '../../../alert';
import { DialogsFormProductComponent } from '../df-product/df-product.component';

@Component({
  selector: 'app-df-product-category',
  templateUrl: './df-product-category.component.html',
  styleUrls: ['./df-product-category.component.css', '../../df-style.css']
})
export class DialogsFormProductCategoryComponent implements OnInit {
  constructor(
          public dialogRef: MatDialogRef<DialogsFormProductCategoryComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any,
          private formBuilder: FormBuilder,     
          private PCategoryService: ProductCategoryService 
        ) {
          // Initialize the form with required fields and set their initial values
          this.fromulario = this.formBuilder.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
          });
        }
  
  
    //categorias: IProductCategory[] = []
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
      this.title = this.isEdit ? 'Actualizar Categoria' : 'Agregar Categoria';
  
      // If editing an existing category, fetch its details and fill the form
      if (this.isEdit) {
        this.fetchProductDetails(this.id!);
      }
    }
  
    // Fetches the details of an existing category and fills the form
    private fetchProductDetails(id: number): void {
      this.PCategoryService.showProduct(id).subscribe({
        next: (response) => {
          const producto: IProductCategory = response.data as IProductCategory;
          this.fromulario.patchValue({
            name: producto.name,
            description: producto.description,
            
          });
        },
        error: (err) => {
          console.log(`Error: ${err}`);
          errorDialog('Hubo un error al obtener la información del producto.');
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
        ? this.PCategoryService.updateProduct(this.id!, product)
        : this.PCategoryService.storeProduct(product);
  
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
