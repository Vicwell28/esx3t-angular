import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ViewCategoriesService } from 'src/app/core/services/views/view-categories.service';
import { errorDialog, successDialog } from '../../../alert';
import { IViewCategory } from 'src/app/core/interfaces/views/IViewCategory';
import { Router } from '@angular/router';
import { RoleViewsService } from 'src/app/core/services/views/role-views.service';
import { forkJoin } from 'rxjs';
import {
  IViewCategoryRole,
  IViewRole,
} from 'src/app/core/interfaces/views/IViewRole';

@Component({
  selector: 'app-df-view-role',
  templateUrl: './df-view-role.component.html',
  styleUrls: ['./df-view-role.component.css', '../../df-style.css'],
})
export class DialogsFormViewRoleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogsFormViewRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private viewCategoriesService: ViewCategoriesService,
    private RoleViewsService: RoleViewsService, 
    private cdRef: ChangeDetectorRef
  ) {
    this.myForm = this.formBuilder.group({
      checkboxes: this.formBuilder.array([])
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
  viewsRole!: IViewCategoryRole[];
  globalIndex: number = 0;

  
getNextIndex(): number {
  return this.globalIndex++;
}

  ngOnInit(): void {
    this.isEdit = this.data.isEdit;
    this.id = this.data.id;
    this.textButton = this.isEdit ? 'Confirmar Cambios' : 'Agregar';
    this.title = this.isEdit
      ? 'Actualizar Vista A Role'
      : 'Agregar Vista A Role';

    this.loadViewsAndRoles();
  }

  private loadViewsAndRoles(): void {
    const viewCategories$ = this.viewCategoriesService.indexViewCategory();
    const roleViews$ = this.RoleViewsService.indexRoleView(`?idRole=${this.id}`);

    forkJoin({
      viewCategories: viewCategories$,
      roleViews: roleViews$,
    }).subscribe({
      next: ({ viewCategories, roleViews }) => {
        this.processViewsAndRoles(viewCategories, roleViews);
      },
      complete: () => {
        console.log('Both requests completed');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private processViewsAndRoles(
    viewCategoriesResponse: any,
    roleViewsResponse: any
  ): void {
    const viewsCategories = viewCategoriesResponse.data as IViewCategory[];
    const viewsCategoriesOfRole = roleViewsResponse.data as IViewCategoryRole[];

    console.log(`viewsCategories: ${viewsCategories}`);
    console.log(viewsCategories);

    const viewsCat = viewsCategories.map((allCategories) => {
      
      const checkedViews = allCategories.view?.map((viewsCategory) => {

        const isChecked = viewsCategoriesOfRole?.some((roleCategory) =>
           roleCategory.views?.some(
            (viewRole) => viewRole.id === viewsCategory.id
          )
        );

        return {
          id: viewsCategory.id,
          name: viewsCategory.name, 
          description: viewsCategory.description,
          view_category_id: viewsCategory.view_category_id,
          status: viewsCategory.status,
          url: viewsCategory.url,
          isChecked: isChecked,
        };
      });

      return {
        category: allCategories.name,
        views: checkedViews,
      } as IViewCategoryRole;
    });

    console.log(`viewsCat: ${viewsCat}`);
    console.log(viewsCat);

    // Initialize the form with required fields and set their initial values

    viewsCat.forEach((option) => {
      option.views?.forEach((values) => {
        let ck = this.myForm.controls['checkboxes'] as FormArray;
        ck.push(new FormControl(values.isChecked));
        console.log(ck);
      });
    });

    this.viewsRole = viewsCat;

    console.log(this.viewsRole);
    console.log(this.myForm.value['checkboxes']);
    this.cdRef.detectChanges();


  }

  get ordersFormArray() {
    return this.myForm.controls['checkboxes'] as FormArray;
  }

  // Submits the form to either update an existing category or store a new one
  onSubmit(): void {
    this.isLoading = true;

    const allViews: IViewRole[] = this.viewsRole!.flatMap(
      (category) => category.views || []
    );

    console.log(allViews);

    const allViewsChecked = (this.myForm.value['checkboxes'] as [])
      .map((value, idx) => (value ? allViews[idx].id : null))
      .filter((v) => v !== null);

    console.log(allViewsChecked);

    const body = {
      role_id: this.id,
      views_id: allViewsChecked,
    };

    this.RoleViewsService.storeRoleView(body).subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);

        const successMessage = this.isEdit
          ? 'Se actualizó la Vista A Role correctamente.'
          : 'Se agregó la Vista A Role correctamente.';
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
