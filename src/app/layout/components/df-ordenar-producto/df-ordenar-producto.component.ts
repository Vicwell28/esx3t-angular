import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ISale } from 'src/app/core/interfaces/sale/ISale';
import { IUser } from 'src/app/core/interfaces/user/IUser';
import { SaleService } from 'src/app/core/services/sale/sale.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { errorDialog, successDialog } from '../alert';
import { IProduct } from 'src/app/core/interfaces/product/IProduct';
import { User } from 'src/app/core/enums/User';
import { OrderService } from 'src/app/core/services/order/order.service';
import { OrderDetailService } from 'src/app/core/services/order/order-detail.service';

@Component({
  selector: 'app-df-ordenar-producto',
  templateUrl: './df-ordenar-producto.component.html',
  styleUrls: ['./df-ordenar-producto.component.css', '../../components/DialogsForms/df-style.css'],
})
export class DfOrdenarProductoComponent {
  constructor(
    public dialogRef: MatDialogRef<DfOrdenarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private orderService: OrderService,
    private orderDetailService: OrderDetailService,
    private userService: UserService
  ) {
    // Initialize the form with required fields and set their initial values
    this.myForm = this.formBuilder.group({
      employee_id: [Number, Validators.required],
      client_id: [Number, Validators.required],
    });

  }

  clients: IUser[] = [];
  employees: IUser[] = [];
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
  product!: IProduct

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    this.id = this.data.data.userId;
    this.textButton = this.isEdit ? 'Confirmar Cambios' : 'Agregar';
    this.title = "Selecciona un cliente";

    this.product = this.data.data.product as IProduct

    console.log(this.product)
    console.log(this.id)
    console.log()

    this.getAllClients()
    
  }

  getAllClients() {
    this.userService.indexUser().subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);
        console.log(response);

        this.clients = response.users as IUser[]

        this.clients = this.clients.filter((val) => val.role_id == User.Cliente)

        console.log(this.clients);

      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al procesar la información.');
      },
      complete: () => {
        console.log(`Complete`);
      },
    })
  }

 


  // Submits the form to either update an existing category or store a new one
  onSubmit(): void {

    this.myForm.controls["employee_id"].setValue(this.id);
    this.myForm.controls["client_id"].setValue(Number.parseInt(this.myForm.controls["client_id"].value));

    console.log(this.myForm.value);

    if (this.myForm.invalid) {
      console.log(this.myForm.value)
      console.log("invalid")
      errorDialog("Selecciona un cliente")
      return;
    }


    const category = {
      employee_id: this.id!, 
      client_id: this.myForm.controls["client_id"].value
    }

    this.isLoading = true;

    this.orderService.storeOrder(category).subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);
        console.log(response);


        let orderDetail = {
          order_id:  response.data.id, 
          products: [
            {
              product_branche_id: this.product.id, 
              quantity: 1
            }
          ]
        }

        console.log(orderDetail);

        this.orderDetailService.storeOrderD(orderDetail).subscribe({
          next: (response) => {
            console.log(`Next: ${response}`);
            console.log(response);

            successDialog("LA ORDEN SE HIZO CORRECTAMETNE");
            this.onClose();
    
          },
          error: (err) => {
            console.log(`Error: ${err}`);
            errorDialog('Hubo un error al procesar la información.');
          },
          complete: () => {
            console.log(`Complete`);
          },
        })

      

      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al procesar la información.');
      },
      complete: () => {
        console.log(`Complete`);
        this.isLoading = false;
      },
    })
  }

  // Closes the dialog
  onClose(): void {
    this.dialogRef.close();
  }
}
