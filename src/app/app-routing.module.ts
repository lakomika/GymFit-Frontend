import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterClientComponent} from './unregistered/register-client/register-client.component';
import {LoginComponent} from './unregistered/login/login.component';
import {HomeComponent} from './unregistered/home/home.component';
import {CompanyDetailsComponent} from './admin/management-company/company-details/company-details.component';
import {AddGymMembershipComponent} from './admin/management-gym-membership/add-gym-membership/add-gym-membership.component';
import {ActiveGymMembershipsComponent} from './admin/management-gym-membership/active-gym-memberships/active-gym-memberships.component';
import {InactiveGymMembershipsComponent} from './admin/management-gym-membership/inactive-gym-memberships/inactive-gym-memberships.component';
import {DeactivateGymMembershipComponent} from './admin/management-gym-membership/deactivate-gym-membership/deactivate-gym-membership.component';
import {AddReceptionistComponent} from './admin/management-receptionist/add-receptionist/add-receptionist.component';
import {ActiveReceptionistsComponent} from './admin/management-receptionist/active-receptionists/active-receptionists.component';
import {AddClientComponent} from './common/admin-and-receptionist/management-client/add-client/add-client.component';
import {ActiveClientsComponent} from './common/admin-and-receptionist/management-client/active-clients/active-clients.component';
import {MainClientComponent} from './client/main-client/main-client.component';
import {BuyGymMembershipComponent} from './client/buy-gym-membership/buy-gym-membership.component';
import {AccessCardComponent} from './client/access-card/access-card.component';
import {EnterDataAndConfirmComponent} from './client/buy-gym-membership/enter-data-and-confirm-buy-gym-membership/enter-data-and-confirm.component';
import {TransferCashDataComponent} from './client/buy-gym-membership/enter-data-and-confirm-buy-gym-membership/transfer-cash-data/transfer-cash-data.component';
import {HistoryOfOrdersComponent} from './client/history-of-orders/history-of-orders.component';
import {PendingInvoicesComponent} from './common/admin-and-receptionist/management-invoice/pending-invoices/pending-invoices.component';
import {CheckStatusGymPassComponent} from './common/admin-and-receptionist/check-status-gym-pass/check-status-gym-pass.component';
import {MyProfileClientComponent} from './client/settings/my-profile-client/my-profile-client.component';
import {ChangePasswordComponent} from './common/settings/change-password/change-password.component';
import {ForgetPasswordComponent} from './unregistered/forget-password/forget-password.component';
import {ResetPasswordComponent} from './unregistered/reset-password/reset-password.component';
import {SellGymPassComponent} from './common/admin-and-receptionist/sell-gym-pass/sell-gym-pass.component';
import {ChoiceGymPassComponent} from './common/admin-and-receptionist/sell-gym-pass/choice-gym-pass/choice-gym-pass.component';
import {InactiveClientsComponent} from './common/admin-and-receptionist/management-client/inactive-clients/inactive-clients.component';
import {InactiveReceptionistsComponent} from './admin/management-receptionist/inactive-receptionists/inactive-receptionists.component';
import {ShowSelectedInvoiceComponent} from './client/history-of-orders/show-selected-invoice/show-selected-invoice.component';
import {TaxesComponent} from './admin/management-company/taxes/taxes.component';
import {TransferDataComponent} from './client/history-of-orders/transfer-data/transfer-data.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register-client', component: RegisterClientComponent},
  {path: 'admin/main', component: CheckStatusGymPassComponent},
  {path: 'admin/management-receptionist/add-receptionist', component: AddReceptionistComponent},
  {path: 'admin/management-receptionist/active-receptionists', component: ActiveReceptionistsComponent},
  {path: 'admin/management-receptionist/inactive-receptionists', component: InactiveReceptionistsComponent},
  {path: 'admin/management-gym-membership/active-gym-memberships', component: ActiveGymMembershipsComponent},
  {path: 'admin/management-gym-membership/add-gym-membership', component: AddGymMembershipComponent},
  {path: 'admin/management-gym-membership/deactivate-gym-membership', component: DeactivateGymMembershipComponent},
  {path: 'admin/management-gym-membership/inactive-gym-memberships', component: InactiveGymMembershipsComponent},
  {path: 'admin/management-company/company-details', component: CompanyDetailsComponent},
  {path: 'admin/management-company/taxes', component: TaxesComponent},
  {path: 'admin-and-receptionist/management-client/active-clients', component: ActiveClientsComponent},
  {path: 'admin-and-receptionist/management-client/add-client', component: AddClientComponent},
  {path: 'admin-and-receptionist/management-client/inactive-clients', component: InactiveClientsComponent},
  {path: 'admin-and-receptionist/management-client/pending-invoices', component: PendingInvoicesComponent},
  {path: 'admin-and-receptionist/management-client/sell-gym-pass', component: SellGymPassComponent},
  {path: 'admin-and-receptionist/management-client/sell-gym-pass/choice-gym-pass', component: ChoiceGymPassComponent},
  {path: 'admin-and-receptionist/check-status-gym-pass', component: CheckStatusGymPassComponent},
  {path: 'receptionist/main', component: CheckStatusGymPassComponent},
  {path: 'client/main', component: MainClientComponent},
  {path: 'client/history-of-orders', component: HistoryOfOrdersComponent},
  {path: 'client/history-of-orders/show-invoice', component: ShowSelectedInvoiceComponent},
  {path: 'client/history-of-orders/transfer-data', component: TransferDataComponent},
  {path: 'client/buy-gym-membership', component: BuyGymMembershipComponent},
  {path: 'client/buy-gym-membership/enter-data-and-confirm', component: EnterDataAndConfirmComponent},
  {path: 'client/buy-gym-membership/enter-data-and-confirm/transfer-cash-data', component: TransferCashDataComponent},
  {path: 'client/settings/my-profile', component: MyProfileClientComponent},
  {path: 'client/access-card', component: AccessCardComponent},
  {path: 'common/settings/change-password', component: ChangePasswordComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'reset-password/:token', component: ResetPasswordComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
