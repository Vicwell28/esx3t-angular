import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { errorDialog, successDialog } from '../../../alert';
import { OrderService } from 'src/app/core/services/order/order.service';
import { IOrder} from 'src/app/core/interfaces/order/IOrder';
import { UserService } from 'src/app/core/services/user/user.service';
import { IResponseUser, IUser } from 'src/app/core/interfaces/user/IUser';


@Component({
  selector: 'app-df-order',
  templateUrl: './df-order.component.html',
  styleUrls: ['./df-order.component.css']
})
export class DialogsFormOrderComponent {

  constructor(
          public dialogRef: MatDialogRef<DialogsFormOrderComponent>,
          @Inject(MAT_DIALOG_DATA) public data: any,
          private formBuilder: FormBuilder,
          private OrderService: OrderService,
          private userService: UserService
        ) {
          this.cargarClientes()
          // Initialize the form with required fields and set their initial values
          this.fromulario = this.formBuilder.group({
            employee_id: [1, Validators.required],
            client_id: [1, Validators.required],
         
          });
        }
  
   // users: IResponseUser[] = []
    clients:IUser[] = [];
    employees:IUser[] = [];
    //roles : IResponseRole[] =[]
    //orders : IOrder [] = []


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

      this.cargarClientes() 
    }
  
    // Fetches the details of an existing category and fills the form
    private fetcOrderDetails(id: number): void {
      this.OrderService.showOrder(id).subscribe({
        next: (response) => {
          const orders: IOrder = response.data as IOrder;
          this.fromulario.patchValue({
            employee_id: orders.employee_id,
            client_id: orders.client_id,
          });
        },
        error: (err) => {
          console.log(`Error: ${err}`);
          errorDialog('Hubo un error al obtener la información de la orden.');
        },
      });
    }

    
      // private fetchUsers() {
      //   this.userService.indexUser().subscribe({
      //     next: (response) => {
      //       const usuarios = response.data;
      //       if (Array.isArray(usuarios)) {
      //         this.users = usuarios;
      //       }
      //     },
      //   });
      // }

      private cargarClientes(){
        this.userService.indexUser().subscribe({
          next: (response) => {
            this.clients = response.users
            this.employees = response.users
          }
        })
      }
    


    // private cargarEmpleados() {
    //   this.userService.indexUser().subscribe({
    //     next: (response: IResponseUser) => {
    //       const users = response.data;
    //       const usersE = users.filter((user: IUser) => user.role_id === 2);
    //       if (Array.isArray(usersE)) {
    //         this.usersE = usersE;
    //         console.log(users)
    //       }
          
    //     },
    //     error: (error) => {
    //       console.error('Error al cargar los empleados:', error);
    //     }
    //   });
    // }
    
    


    onSubmit(): void {
      if (this.fromulario.invalid) {
        return;
      }
  
      const order: IOrder = this.fromulario.value;
  
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
