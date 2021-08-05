import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {DataTablesModule} from 'angular-datatables';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {UtilModule} from '../util/util.module';
import {CdkTableModule} from '@angular/cdk/table';
import {DeleteDialogComponent} from '../util/functionality-buttons/delete-dialog/delete-dialog.component';
import {DeclineDialogComponent} from '../util/functionality-buttons/decline-dialog/decline-dialog.component';
import {ApproveDialogComponent} from '../util/functionality-buttons/approve-dialog/approve-dialog.component';
import {FormWizardModule} from 'angular2-wizard/dist';
import {ExpandMode, NgxTreeSelectModule} from 'ngx-tree-select';
import {PageHeaderModule} from '../../../shared/modules/page-header/page-header.module';
import {UfsExportService} from '../util/ufs-export.service';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ApproveLicensesComponent } from './licences/approve-licenses/approve-licenses.component';
import { CreatelicensesComponent } from './licences/createlicenses/createlicenses.component';
import { ListlicensesComponent } from './licences/listlicenses/listlicenses.component';
import { ViewLicenseComponent } from './licences/view-license/view-license.component';
import { CmaRoutingModule } from './cma-routing.module';
import { ApproveriskmatrixComponent } from './riskmatrix/approve-riskmatrix/approve-riskmatrix.component';
import { CreateriskmatrixComponent } from './riskmatrix/createriskmatrix/createriskmatrix.component';
import { ListriskmatrixComponent } from './riskmatrix/listriskmatrix/listriskmatrix.component';
import { ViewriskmatrixComponent } from './riskmatrix/view-riskmatrix/view-riskmatrix.component';
import { ApproveproceduresComponent } from './procedures/approve-procedures/approve-procedures.component';
import { CreateproceduresComponent } from './procedures/createprocedures/createprocedures.component';
import { ListproceduresComponent } from './procedures/listprocedures/listprocedures.component';
import { ViewproceduresComponent } from './procedures/view-procedures/view-procedures.component';
import { CreateprocedureexecutionattributesComponent } from './procedure-execution-attributes/createprocedure-execution-attributes/createprocedure-execution-attributes.component';
import { ListprocedureexecutionattributesComponent } from './procedure-execution-attributes/listprocedure-execution-attributes/listprocedure-execution-attributes.component';
import { excuteproceduresComponent } from './procedures/excuteprocedures/excuteprocedures.component';
import { ApproveoveralriskdescriptionComponent } from './overalriskdescription/approve-overalriskdescription/approve-overalriskdescription.component';
import { CreateoveralriskdescriptionComponent } from './overalriskdescription/createoveralriskdescription/createoveralriskdescription.component';
import { ListoveralriskdescriptionComponent } from './overalriskdescription/listoveralriskdescription/listoveralriskdescription.component';
import { CreatematuritylevelComponent } from './maturitylevel/creatematuritylevel/creatematuritylevel.component';
import { ListmaturitylevelComponent } from './maturitylevel/listmaturitylevel/listmaturitylevel.component';
import { ViewmaturitylevelComponent } from './maturitylevel/view-maturitylevel/view-maturitylevel.component';
import { ApprovematuritylevelComponent } from './maturitylevel/approve-maturitylevel/approve-maturitylevel.component';
import { ApprovelikelyhoodComponent } from './likelyhood/approve-likelyhood/approve-likelyhood.component';
import { CreatelikelyhoodComponent } from './likelyhood/createlikelyhood/createlikelyhood.component';
import { ListlikelyhoodComponent } from './likelyhood/listlikelyhood/listlikelyhood.component';
import { ViewlikelyhoodComponent } from './likelyhood/view-likelyhood/view-likelyhood.component';
import { ApproveimpactsComponent } from './impacts/approve-impacts/approve-impacts.component';
import { CreateimpactsComponent } from './impacts/createimpacts/createimpacts.component';
import { ListimpactsComponent } from './impacts/listimpacts/listimpacts.component';
import { ViewimpactsComponent } from './impacts/view-impacts/view-impacts.component';
import { ApprovedomainComponent } from './domain/approve-domain/approve-domain.component';
import { CreatedomainComponent } from './domain/createdomain/createdomain.component';
import { ListdomainComponent } from './domain/listdomain/listdomain.component';
import { ViewdomainComponent } from './domain/view-domain/view-domain.component';
import { ApprovecontrolComponent } from './control/approve-control/approve-control.component';
import { CreatecontrolComponent } from './control/createcontrol/createcontrol.component';
import { ListcontrolComponent } from './control/listcontrol/listcontrol.component';
import { ViewcontrolComponent } from './control/view-control/view-control.component';
import { ApproveassessmentComponent } from './assessment/approve-assessment/approve-assessment.component';
import { CreateassessmentComponent } from './assessment/createassessment/createassessment.component';
import { ListassessmentComponent } from './assessment/listassessment/listassessment.component';
import { ViewassessmentComponent } from './assessment/view-assessment/view-assessment.component';
import { ApproveordersComponent } from './orders/approve-orders/approve-orders.component';
import { ListordersComponent } from './orders/listorders/listorders.component';
import { ApprovepaymentsComponent } from './payments/approve-payments/approve-payments.component';
import { ListpaymentsComponent } from './payments/listpayments/listpayments.component';
import { UpdatePaymentComponent } from './payments/update-payment/update-payment.component';
import { UsersComponent } from './cma-users/users/users.component';
import { CreateUserComponent } from './cma-users/create-user/create-user.component';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { ListRiskPtofileComponent } from './risk-profile/list-risk-ptofile/list-risk-ptofile.component';
import { ApproveRiskPtofileComponent } from './risk-profile/approve-risk-ptofile/approve-risk-ptofile.component';
import { CreateRiskPtofileComponent } from './risk-profile/create-risk-ptofile/create-risk-ptofile.component';
import { UpdateRiskPtofileComponent } from './risk-profile/update-risk-ptofile/update-risk-ptofile.component';
import { ViewRiskPtofileComponent } from './risk-profile/view-risk-ptofile/view-risk-ptofile.component';
import {MatTreeModule} from '@angular/material/tree';
import { UpdateOverralriskComponent } from './overalriskdescription/update-overralrisk/update-overralrisk.component';
import { ChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
   
   
    ViewLicenseComponent,
    ListlicensesComponent,
    CreatelicensesComponent,
    ApproveLicensesComponent,

    ListriskmatrixComponent,
    CreateriskmatrixComponent,
    ViewriskmatrixComponent,
   ApproveriskmatrixComponent,

  ListproceduresComponent, 
  CreateproceduresComponent, 
  ViewproceduresComponent, 
  excuteproceduresComponent, 
  ApproveproceduresComponent,

  ListprocedureexecutionattributesComponent,
  CreateprocedureexecutionattributesComponent,


  ListoveralriskdescriptionComponent,
  CreateoveralriskdescriptionComponent,
  ApproveoveralriskdescriptionComponent,


  ListmaturitylevelComponent,
  CreatematuritylevelComponent,
  ViewmaturitylevelComponent,
  ApprovematuritylevelComponent,

  ListlikelyhoodComponent,
  CreatelikelyhoodComponent,
  ViewlikelyhoodComponent,
  ApprovelikelyhoodComponent,


  ListimpactsComponent, 
 CreateimpactsComponent, 
 ViewimpactsComponent, 
  ApproveimpactsComponent, 


 ListdomainComponent,
CreatedomainComponent,
  ViewdomainComponent,
 ApprovedomainComponent,


 ListcontrolComponent,
CreatecontrolComponent,
ViewcontrolComponent,
 ApprovecontrolComponent,


ListassessmentComponent,
CreateassessmentComponent,
ViewassessmentComponent,
ApproveassessmentComponent,


ListordersComponent,     
ApproveordersComponent, 


ListpaymentsComponent,
ApprovepaymentsComponent,
UpdatePaymentComponent,
UsersComponent,
CreateUserComponent,
AuditTrailsComponent,
ListRiskPtofileComponent,
ApproveRiskPtofileComponent,
CreateRiskPtofileComponent,
UpdateRiskPtofileComponent,
ViewRiskPtofileComponent,
UpdateOverralriskComponent,


  ],
  imports: [
    RxReactiveFormsModule,
    CommonModule,
    CmaRoutingModule,
    DataTablesModule,
    UtilModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatRadioModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatTabsModule,
    FormsModule,
    ChartsModule,
    FormWizardModule,
    MatTreeModule,
    NgxTreeSelectModule.forRoot({
      allowFilter: true,
      filterPlaceholder: 'Type your filter here...',
      maxVisibleItemCount: 10,
      idField: 'unitItemId',
      textField: 'name',
      childrenField: 'children',
      allowParentSelection: true,
      expandMode: ExpandMode.Selection
    }),
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    CdkTableModule,
    PageHeaderModule,
    ModalModule,
    NgbModule
    ],

  entryComponents: [
    DeleteDialogComponent,
    ApproveDialogComponent,
    DeclineDialogComponent
  ],
  providers: [UfsExportService]
})
export class CmaModule {
}
