import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProduct } from 'src/app/core/interfaces/product/IProduct';
import { IProductCategory } from 'src/app/core/interfaces/product/IProductCategory';
import { ProductCategoryService } from 'src/app/core/services/product/product-category.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { errorDialog, successDialog } from '../../../alert';
import { OrderService } from 'src/app/core/services/order/order.service';
import { IOrder, IResponseOrder } from 'src/app/core/interfaces/order/IOrder';
import { UserService } from 'src/app/core/services/user/user.service';
import { IResponseUser, IUser } from 'src/app/core/interfaces/user/IUser';
import { RoleService } from 'src/app/core/services/user/role.service';
import { IResponseRole } from 'src/app/core/interfaces/user/IRole';
import { OrderDetailService } from 'src/app/core/services/order/order-detail.service';
import { IOrderDetail } from 'src/app/core/interfaces/order/IOrderDetail';

@Component({
  selector: 'app-df-order-detail',
  templateUrl: './df-order-detail.component.html',
  styleUrls: ['./df-order-detail.component.css', '../../df-style.css']
})
export class DialogsFormOrderDetailComponent implements OnInit {

  constructor(
          public dialogRef: MatDialogRef<DialogsFormOrderDetailComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any,
          private formBuilder: FormBuilder,
          private ProductsService: ProductService,
          private OrderService: OrderService,
          private orderDetService: OrderDetailService,
          private userService: UserService,
          private rolService: RoleService
        ) {
          // Initialize the form with required fields and set their initial values
          this.fromulario = this.formBuilder.group({
            order_id: ['1', Validators.required],
            product_branche_id: ['', Validators.required],
            quantity: ['', Validators.required],
         
          });
        }
  


    
    orders : IOrder [] = []

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
      this.title = this.isEdit ? 'Actualizar Orden' : 'Agregar Orden';
  
      // If editing an existing category, fetch its details and fill the form
      if (this.isEdit) {
        this.fetcOrderDetails(this.id!);
      }
   
      this.fetchOrders();
    }
  
    // Fetches the details of an existing category and fills the form
    private fetcOrderDetails(id: number): void {
      this.orderDetService.showOrderD(id).subscribe({
        next: (response) => {
          const orders: IOrderDetail = response.data as IOrderDetail;
          this.fromulario.patchValue({
            order_id: orders.order_id,
            product_branche_id: orders.product_branche_id,
            quantity: orders.quantity
          });
        },
        error: (err) => {
          console.log(`Error: ${err}`);
          errorDialog('Hubo un error al obtener la información de la orden.');
        },
      });
    }


    private fetchOrders() {
      this.orderDetService.indexOrderD().subscribe({
        next: (response) => {
          const orders = response.data;
          if (Array.isArray(orders)) {
            this.orders = orders;
          }
        },
      });
    }



    onSubmit(): void {
      if (this.fromulario.invalid) {
        return;
      }
  
      const order: IOrderDetail = this.fromulario.value;
  
      this.isLoading = true;
  
      const request = this.isEdit
        ? this.OrderService.updateOrder(this.id!, order)
        : this.OrderService.storeOrder(order);
  
      request.subscribe({
        next: (response) => {
          console.log(`Next: ${response}`);
  
          const successMessage = this.isEdit
            ? 'Se actualizó la orden correctamente.'
            : 'Se agregó la orden correctamente.';
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
