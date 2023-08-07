import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { errorDialog, successDialog } from '../../../alert';
import { ISale } from 'src/app/core/interfaces/sale/ISale';
import { IUser } from 'src/app/core/interfaces/user/IUser';
import { SaleService } from 'src/app/core/services/sale/sale.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-df-sale',
  templateUrl: './df-sale.component.html',
  styleUrls: ['./df-sale.component.css']
})
export class DialogsFormSaleComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogsFormSaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private saleService: SaleService,
    private userService: UserService,
  ) {
    this.fetchClients()
    // Initialize the form with required fields and set their initial values
    this.myForm = this.formBuilder.group({
      employee_id: [1, Validators.required],
      client_id: [1, Validators.required],
    });

  }

  clients:IUser[] = [];
  employees:IUser[] = [];
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
    this.title = this.isEdit ? 'Actualizar venta ' : 'Agregar venta ';

    // If editing an existing category, fetch its details and fill the form
    if (this.isEdit) {
      this.fetch(this.id!);
    }
    this.fetchClients()
  }

  private fetch(id: number){
    this.saleService.showSale(id).subscribe({
      next: (response) => {
        const sale: ISale = response.data as ISale;
        this.myForm.patchValue({
          employee_id: sale.employee_id,
          client_id: sale.client_id,
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al obtener la información de la categoría.');
      },
    });
  }

  private fetchClients(){
    this.userService.indexUser().subscribe({
      next: (response) => {
        this.clients = response.users
        this.employees = response.users
      }
    })
  }


  // Submits the form to either update an existing category or store a new one
  onSubmit(): void {
    if (this.myForm.invalid) {
      // console.log(this.myForm.value)
      // console.log("invalid")
      return;
    }

    const category: ISale = this.myForm.value;

    this.isLoading = true;

    const request = this.isEdit
      ? this.saleService.updateSale(this.id!, category)
      : this.saleService.storeSale(category);

    request.subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);

        const successMessage = this.isEdit
          ? 'Se actualizó la venta correctamente.'
          : 'Se agregó la venta correctamente.';
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
