import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { errorDialog, successDialog } from '../../../alert';
import { IViewCategory } from 'src/app/core/interfaces/views/IViewCategory';
import { ViewsService } from 'src/app/core/services/views/views.service';
import { IStoreView } from 'src/app/core/interfaces/views/IView';
import { ViewCategoriesService } from 'src/app/core/services/views/view-categories.service';
@Component({
  selector: 'app-df-view',
  templateUrl: './df-view.component.html',
  styleUrls: ['./df-view.component.css', '../../df-style.css'],
})
export class DialogsFormViewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogsFormViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private ViewsService: ViewsService,
    private viewCategoriesService: ViewCategoriesService
  ) {
    // Initialize the form with required fields and set their initial values
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      view_category_id: []
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

  categories!: IViewCategory[]

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    this.id = this.data.id;
    this.textButton = this.isEdit ? 'Confirmar Cambios' : 'Agregar';
    this.title = this.isEdit ? 'Actualizar Vista A Rol' : 'Agregar Vista A Rol';

    // If editing an existing category, fetch its details and fill the form
    if (this.isEdit) {
      this.fetchCategoryDetails(this.id!);
    }

    this.getViewCategry(); 
  }

  getViewCategry() {
    this.viewCategoriesService.indexViewCategory().subscribe({
      next: (response) => {
        console.log(response.data);
        this.categories = response.data as IViewCategory[];
      },
      error: (err) => {
        errorDialog(
          'Hubo un error al obtener la información de la Vista A Rol.'
        );
      },
    });
  }

  // Fetches the details of an existing category and fills the form
  private fetchCategoryDetails(id: number): void {
    this.ViewsService.showView(id).subscribe({
      next: (response) => {
        const category: IViewCategory = response.data as IViewCategory;
        this.myForm.patchValue({
          name: category.name,
          description: category.description,
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog(
          'Hubo un error al obtener la información de la Vista A Rol.'
        );
      },
    });
  }

  // Submits the form to either update an existing category or store a new one
  onSubmit(): void {
    console.log(this.myForm)
    if (this.myForm.invalid) {
      return;
    }

    const category: IStoreView = this.myForm.value;
    category.view_category_id = Number(category.view_category_id);

    this.isLoading = true;

    const request = this.isEdit
      ? this.ViewsService.updateView(this.id!, category)
      : this.ViewsService.storeView(category);

    request.subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);

        const successMessage = this.isEdit
          ? 'Se actualizó la Vista A Rol correctamente.'
          : 'Se agregó la Vista A Rol correctamente.';
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
