import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { errorDialog, successDialog } from '../../../alert';
import { IState } from 'src/app/core/interfaces/location/IState';
import { StateService } from 'src/app/core/services/location/state.service';

@Component({
  selector: 'app-df-state',
  templateUrl: './df-state.component.html',
  styleUrls: ['./df-state.component.css', '../../df-style.css']
})
export class DialogsFormStateComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogsFormStateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private StateService: StateService
  ) {
    // Initialize the form with required fields and set their initial values
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

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
    this.title = this.isEdit ? 'Actualizar Estado' : 'Agregar Estado';

    // If editing an existing category, fetch its details and fill the form
    if (this.isEdit) {
      this.fetchStateDetails(this.id!);
    }
  }

  // Fetches the details of an existing category and fills the form
  private fetchStateDetails(id: number): void {
    this.StateService.showStates(id).subscribe({
      next: (response) => {
        const state: IState = response.data as IState;
        this.myForm.patchValue({
          name: state.name
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al obtener la información de el Estado.');
      },
    });
  }

  // Submits the form to either update an existing category or store a new one
  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }

    const state: IState = this.myForm.value;

    this.isLoading = true;

    const request = this.isEdit
      ? this.StateService.updateStates(this.id!, state)
      : this.StateService.storeStates(state);

    request.subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);

        const successMessage = this.isEdit
          ? 'Se actualizó el Estado correctamente.'
          : 'Se agregó el Estado correctamente.';
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
