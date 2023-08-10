import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { errorDialog, successDialog } from '../../../alert';
import { CityService } from 'src/app/core/services/location/city.service';
import { StateService } from 'src/app/core/services/location/state.service';
import { ICity } from 'src/app/core/interfaces/location/ICity';
import { IState } from 'src/app/core/interfaces/location/IState';

@Component({
  selector: 'app-df-city',
  templateUrl: './df-city.component.html',
  styleUrls: ['./df-city.component.css', '../../df-style.css']
})
export class DialogsFormCityComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogsFormCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private CityService: CityService,
    private StateService: StateService
  ) {
    // Initialize the form with required fields and set their initial values
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      state_id: ['', Validators.required],
    });
  }

  states: IState[] = []
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
    this.title = this.isEdit ? 'Actualizar Ciudad' : 'Agregar Ciudad';

    // If editing an existing category, fetch its details and fill the form
    if (this.isEdit) {
      this.fetchCitiesDetails(this.id!);
    }
    this.fetchSatates();
  }

  // Fetches the details of an existing category and fills the form
  private fetchCitiesDetails(id: number): void {
    this.CityService.showCities(id).subscribe({
      next: (response) => {
        const city: ICity = response.data as ICity;
        this.myForm.patchValue({
          name: city.name,
          state_id: city.state_id,
          status: city.status,
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al obtener la información de la Ciudad.');
      },
    });
  }

  private fetchSatates() {
    this.StateService.indexStates().subscribe({
      next: (response) => {
        const states = response.data;
        if (Array.isArray(states)) {
          this.states = states;
        }
      },
    });
  }

  // Submits the form to either update an existing category or store a new one
  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }

    const city: ICity = this.myForm.value;

    this.isLoading = true;

    const request = this.isEdit
      ? this.CityService.updateCities(this.id!, city)
      : this.CityService.storeCities(city);

    request.subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);

        const successMessage = this.isEdit
          ? 'Se actualizó la Ciudad correctamente.'
          : 'Se agregó la Ciudad correctamente.';
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
