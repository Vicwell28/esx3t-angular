import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { errorDialog, successDialog } from '../../../alert';
import { IRole } from 'src/app/core/interfaces/user/IRole';
import { IUser } from 'src/app/core/interfaces/user/IUser';
import { RoleService } from 'src/app/core/services/user/role.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { BrancheService } from 'src/app/core/services/branche/branche.service';
import { CityService } from 'src/app/core/services/location/city.service';
import { IBranch } from 'src/app/core/interfaces/branche/IBranch';
import { ICity } from 'src/app/core/interfaces/location/ICity';

@Component({
  selector: 'app-df-user',
  templateUrl: './df-user.component.html',
  styleUrls: ['./df-user.component.css'],
})
export class DialogsFormUserComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogsFormUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private roleService: RoleService,
    private brancheService: BrancheService,
    private cityService: CityService,
    private userService: UserService
  ) {
    // Initialize the form with required fields and set their initial values
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      date_birth: ['', Validators.required],
      rfc: ['', Validators.required],
      address: ['', Validators.required],
      postal_code: ['', Validators.required],
      role_id: [1, Validators.required],
      city_id: [1, Validators.required],
      branche_id: [1, Validators.required],
    });
  }

  cities: ICity[] = [];
  branches: IBranch[] = [];
  roles: IRole[] = [];
  // Indicates whether an existing role is being edited
  isEdit = false;
  // ID of the role in case of edit
  id: number | undefined;
  // Form for role data
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

    // If editing an existing role, fetch its details and fill the form
    if (this.isEdit) {
      this.fetchUser(this.id!);
    }
    this.fetchRoles();
    this.fetchBranches();
    this.fetchCities();
  }

  private fetchUser(id: number) {
    this.userService.showUser(id).subscribe({
      next: (response) => {
        const user: IUser = response.data as IUser;
        this.myForm.patchValue({
          username: user.username,
          email: user.email,
          fname: user.fname,
          lname: user.lname,
          date_birth: user.date_birth,
          rfc: user.rfc,
          address: user.address,
          postal_code: user.postal_code,
          role_id: user.role_id,
          city_id: user.city_id,
          branche_id: user.branche_id,
        });
      },
      error: (err) => {
        console.log(`Error: ${err}`);
        errorDialog('Hubo un error al obtener la información de la categoría.');
      },
    });
  }

  private fetchRoles() {
    this.roleService.indexRole().subscribe({
      next: (response) => {
        const roles = response.data;
        if (Array.isArray(roles)) {
          this.roles = roles;
        }
      },
    });
  }
  private fetchBranches() {
    this.brancheService.indexBranches().subscribe({
      next: (response) => {
        const branches = response.data;
        if (Array.isArray(branches)) {
          this.branches = branches;
        }
      },
    });
  }
  private fetchCities() {
    this.cityService.indexCities().subscribe({
      next: (response) => {
        const cities = response.data;
        if (Array.isArray(cities)) {
          this.cities = cities;
        }
      },
    });
  }

  // Submits the form to either update an existing role or store a new one
  onSubmit(): void {
    if (this.myForm.invalid) {
      return;
    }

    const user: IUser = this.myForm.value;

    this.isLoading = true;

    const request = this.isEdit
      ? this.userService.updateUser(this.id!, user)
      : this.userService.storeUser(user);

    request.subscribe({
      next: (response) => {
        console.log(`Next: ${response}`);

        const successMessage = this.isEdit
          ? 'Se actualizó el usuario correctamente.'
          : 'Se agregó el usuario correctamente.';
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
