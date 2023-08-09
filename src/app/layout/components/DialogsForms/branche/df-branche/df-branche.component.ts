import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBranch } from 'src/app/core/interfaces/branche/IBranch';
import { BrancheService } from 'src/app/core/services/branche/branche.service';
import { errorDialog, successDialog } from '../../../alert';

@Component({
  selector: 'app-df-branche',
  templateUrl: './df-branche.component.html',
  styleUrls: ['./df-branche.component.css', '../../df-style.css']
})
export class DialogsFormBrancheComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogsFormBrancheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private BrancheService: BrancheService
  ) {
    // Initialize the form with required fields and set their initial values
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      postal_code: ['', Validators.required],
      citie_id: ['', Validators.required],
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
    this.title = this.isEdit ? 'Actualizar Cedis' : 'Agregar Cedis';

    // If editing an existing category, fetch its details and fill the form
    if (this.isEdit) {
      this.fetchBranchesDetails(this.id!);
    }
  }

  // Fetches the details of an existing category and fills the form
  private fetchBranchesDetails(id: number): void {
    this.BrancheService.showBranches(id).subscribe({
      next: (response) => {
        const branch: IBranch = response.data as IBranch;
        this.myForm.patchValue({
          name: branch.name,
          address: branch.address,
          postal_code: branch.postal_code,
          citie_id: branch.citie_id
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al obtener la información de la Cedis.');
      },
    });
  }

  // Submits the form to either update an existing category or store a new one
  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }

    const branch: IBranch = this.myForm.value;

    this.isLoading = true;

    const request = this.isEdit
      ? this.BrancheService.updateBranches(this.id!, branch)
      : this.BrancheService.storeBranches(branch);

    request.subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);

        const successMessage = this.isEdit
          ? 'Se actualizó la Cedis correctamente.'
          : 'Se agregó la Cedis correctamente.';
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
