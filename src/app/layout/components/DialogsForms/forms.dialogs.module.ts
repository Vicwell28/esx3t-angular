import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { MaterialModule } from 'src/app/shared/components/material/material.app.module';
import { DialogsFormViewCategoryComponent } from './views/df-view-category/df-view-category.component';
import { DialogsFormViewComponent } from './views/df-view/df-view.component';
import { DialogsFormViewRoleComponent } from './views/df-view-role/df-view-role.component';
import { DialogsFormSaleComponent } from './sale/df-sale/df-sale.component';
import { DialogsFormSaleDetailComponent } from './sale/df-sale-detail/df-sale-detail.component';
import { DialogsFormProductComponent } from './product/df-product/df-product.component';
import { DialogsFormProductCategoryComponent } from './product/df-product-category/df-product-category.component';
import { DialogsFormProductBrancheComponent } from './product/df-product-branche/df-product-branche.component';
import { DialogsFormOrderComponent } from './order/df-order/df-order.component';
import { DialogsFormOrderDetailComponent } from './order/df-order-detail/df-order-detail.component';
import { DialogsFormStateComponent } from './location/df-state/df-state.component';
import { DialogsFormCityComponent } from './location/df-city/df-city.component';
import { DialogsFormBrancheComponent } from './branche/df-branche/df-branche.component';
import { DialogsFormUserComponent } from './user/df-user/df-user.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FormDialogComponent,
    DialogsFormViewCategoryComponent,
    DialogsFormViewComponent,
    DialogsFormViewRoleComponent,
    DialogsFormSaleComponent,
    DialogsFormSaleDetailComponent,
    DialogsFormProductComponent,
    DialogsFormProductCategoryComponent,
    DialogsFormProductBrancheComponent,
    DialogsFormOrderComponent,
    DialogsFormOrderDetailComponent,
    DialogsFormStateComponent,
    DialogsFormCityComponent,
    DialogsFormBrancheComponent,
    DialogsFormUserComponent,
  ],
  imports: [MaterialModule, CommonModule, BrowserModule],
  exports: [
    FormDialogComponent,
    DialogsFormViewCategoryComponent,
    DialogsFormViewComponent,
    DialogsFormViewRoleComponent,
    DialogsFormSaleDetailComponent,
    DialogsFormSaleComponent,
    DialogsFormProductComponent,
    DialogsFormProductCategoryComponent,
    DialogsFormProductBrancheComponent,
    DialogsFormOrderComponent,
    DialogsFormOrderDetailComponent,
    DialogsFormStateComponent,
    DialogsFormCityComponent,
    DialogsFormBrancheComponent,
    DialogsFormUserComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class FormDialogsAppModule {}
