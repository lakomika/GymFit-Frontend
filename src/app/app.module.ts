import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {LoginComponent} from './unregistered/login/login.component';
import {RegisterClientComponent} from './unregistered/register-client/register-client.component';
import {HomeComponent} from './unregistered/home/home.component';
import {authInterceptorProviders} from './common/_helpers/auth.interceptor';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomFormsModule} from 'ng2-validation';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MainAdminComponent} from './admin/main-admin/main-admin.component';
import {MainClientComponent} from './client/main-client/main-client.component';
import {OperationSuccessComponent} from './common/operation/operation-success/operation-success.component';
import {CompanyDetailsComponent} from './admin/management-company/company-details/company-details.component';
import {EditNameCompanyComponent} from './admin/management-company/company-details/edit-name-company/edit-name-company.component';
import {OperationErrorComponent} from './common/operation/operation-error/operation-error.component';
import {EditAccountNumberCompanyComponent} from './admin/management-company/company-details/edit-account-number-company/edit-account-number-company.component';
import {EditAddressCompanyComponent} from './admin/management-company/company-details/edit-address-company/edit-address-company.component';
import {AddGymMembershipComponent} from './admin/management-gym-membership/add-gym-membership/add-gym-membership.component';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import '@angular/common/locales/global/pl';
import {ActiveGymMembershipsComponent} from './admin/management-gym-membership/active-gym-memberships/active-gym-memberships.component';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {getPolishPaginatorIntl} from './common/_helpers/polish-paginator-intl';
import {InactiveGymMembershipsComponent} from './admin/management-gym-membership/inactive-gym-memberships/inactive-gym-memberships.component';
import {DeactivateGymMembershipComponent} from './admin/management-gym-membership/deactivate-gym-membership/deactivate-gym-membership.component';
import {ConfirmationDeactivatingGymMembershipComponent} from './admin/management-gym-membership/deactivate-gym-membership/confirmation-deactivating-gym-membership/confirmation-deactivating-gym-membership.component';
import {SuccessOfAddedGymMembershipComponent} from './admin/management-gym-membership/add-gym-membership/success-of-added-gym-membership/success-of-added-gym-membership.component';
import {AddReceptionistComponent} from './admin/management-receptionist/add-receptionist/add-receptionist.component';
import {ActiveReceptionistsComponent} from './admin/management-receptionist/active-receptionists/active-receptionists.component';
import {SuccessOfAddingReceptionistComponent} from './admin/management-receptionist/add-receptionist/success-of-adding-receptionist/success-of-adding-receptionist.component';
import {ShowMoreDataReceptionistComponent} from './admin/management-receptionist/common/show-more-data-receptionist/show-more-data-receptionist.component';
import {ChangePasswordUserComponent} from './common/admin-and-receptionist/user-operations/change-password-user/change-password-user.component';
import {DeactivationAccountUserComponent} from './common/admin-and-receptionist/user-operations/deactivation-account-user/deactivation-account-user.component';
import {AddClientComponent} from './common/admin-and-receptionist/management-client/add-client/add-client.component';
import {SuccessOfAddingClientComponent} from './common/admin-and-receptionist/management-client/add-client/success-of-adding-client/success-of-adding-client.component';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import {ActiveClientsComponent} from './common/admin-and-receptionist/management-client/active-clients/active-clients.component';
import {ShowMoreDataClientComponent} from './common/admin-and-receptionist/management-client/common/show-more-data-client/show-more-data-client.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {BuyGymMembershipComponent} from './client/buy-gym-membership/buy-gym-membership.component';
import {AccessCardComponent} from './client/access-card/access-card.component';
import {EnterDataAndConfirmComponent} from './client/buy-gym-membership/enter-data-and-confirm-buy-gym-membership/enter-data-and-confirm.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {EditTaxIdComponent} from './admin/management-company/company-details/edit-tax-id/edit-tax-id.component';
import {TransferCashDataComponent} from './client/buy-gym-membership/enter-data-and-confirm-buy-gym-membership/transfer-cash-data/transfer-cash-data.component';
import {HistoryOfOrdersComponent} from './client/history-of-orders/history-of-orders.component';
import {CancelTheOrderComponent} from './client/history-of-orders/cancel-the-order/cancel-the-order.component';
import {PendingInvoicesComponent} from './common/admin-and-receptionist/management-invoice/pending-invoices/pending-invoices.component';
import {ConfirmDeliveryOfFundsComponent} from './common/admin-and-receptionist/management-invoice/pending-invoices/confirm-delivery-of-funds/confirm-delivery-of-funds.component';
import {CheckStatusGymPassComponent} from './common/admin-and-receptionist/check-status-gym-pass/check-status-gym-pass.component';
import {GymPassValidComponent} from './common/admin-and-receptionist/check-status-gym-pass/gym-pass-valid/gym-pass-valid.component';
import {GymPassInvalidComponent} from './common/admin-and-receptionist/check-status-gym-pass/gym-pass-invalid/gym-pass-invalid.component';
import {GymPassIncorrectDataComponent} from './common/admin-and-receptionist/check-status-gym-pass/gym-pass-incorrect-data/gym-pass-incorrect-data.component';
import {MyProfileClientComponent} from './client/settings/my-profile-client/my-profile-client.component';
import {SuccessEditProfileClientComponent} from './client/settings/my-profile-client/success-edit-profile-client/success-edit-profile-client.component';
import {DeactivationClientDialogComponent} from './common/admin-and-receptionist/management-client/active-clients/deactivation-client-dialog/deactivation-client-dialog.component';
import {ChangePasswordComponent} from './common/settings/change-password/change-password.component';
import {ForgetPasswordComponent} from './unregistered/forget-password/forget-password.component';
import {ResetPasswordComponent} from './unregistered/reset-password/reset-password.component';
import {SellGymPassComponent} from './common/admin-and-receptionist/sell-gym-pass/sell-gym-pass.component';
import {ChoiceGymPassComponent} from './common/admin-and-receptionist/sell-gym-pass/choice-gym-pass/choice-gym-pass.component';
import {ConfirmChoiceGymPassComponent} from './common/admin-and-receptionist/sell-gym-pass/choice-gym-pass/confirm-choice-gym-pass/confirm-choice-gym-pass.component';
import {InactiveClientsComponent} from './common/admin-and-receptionist/management-client/inactive-clients/inactive-clients.component';
import {InactiveReceptionistsComponent} from './admin/management-receptionist/inactive-receptionists/inactive-receptionists.component';
import {SuccessRegisterClientComponent} from './unregistered/register-client/success-register-client/success-register-client.component';
import {ShowSelectedInvoiceComponent} from './client/history-of-orders/show-selected-invoice/show-selected-invoice.component';
import {TaxesComponent} from './admin/management-company/taxes/taxes.component';
import {EditTaxRateComponent} from './admin/management-company/taxes/edit-tax-rate/edit-tax-rate.component';
import {TransferDataComponent} from './client/history-of-orders/transfer-data/transfer-data.component';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterClientComponent,
    HomeComponent,
    MainAdminComponent,
    MainClientComponent,
    OperationSuccessComponent,
    CompanyDetailsComponent,
    EditNameCompanyComponent,
    OperationErrorComponent,
    EditAccountNumberCompanyComponent,
    EditAddressCompanyComponent,
    AddGymMembershipComponent,
    ActiveGymMembershipsComponent,
    InactiveGymMembershipsComponent,
    DeactivateGymMembershipComponent,
    ConfirmationDeactivatingGymMembershipComponent,
    SuccessOfAddedGymMembershipComponent,
    AddReceptionistComponent,
    ActiveReceptionistsComponent,
    SuccessOfAddingReceptionistComponent,
    ShowMoreDataReceptionistComponent,
    ChangePasswordUserComponent,
    DeactivationAccountUserComponent,
    AddClientComponent,
    SuccessOfAddingClientComponent,
    ActiveClientsComponent,
    ShowMoreDataClientComponent,
    BuyGymMembershipComponent,
    AccessCardComponent,
    EnterDataAndConfirmComponent,
    EditTaxIdComponent,
    TransferCashDataComponent,
    HistoryOfOrdersComponent,
    CancelTheOrderComponent,
    PendingInvoicesComponent,
    ConfirmDeliveryOfFundsComponent,
    CheckStatusGymPassComponent,
    GymPassValidComponent,
    GymPassInvalidComponent,
    GymPassIncorrectDataComponent,
    MyProfileClientComponent,
    SuccessEditProfileClientComponent,
    DeactivationClientDialogComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SellGymPassComponent,
    ChoiceGymPassComponent,
    ConfirmChoiceGymPassComponent,
    InactiveClientsComponent,
    InactiveReceptionistsComponent,
    SuccessRegisterClientComponent,
    ShowSelectedInvoiceComponent,
    TaxesComponent,
    EditTaxRateComponent,
    TransferDataComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    CustomFormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    NgxQRCodeModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    RecaptchaModule,
    RecaptchaFormsModule

  ],
  providers: [authInterceptorProviders, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    {provide: LOCALE_ID, useValue: 'pl-PL'},
    {provide: MatPaginatorIntl, useValue: getPolishPaginatorIntl()}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
