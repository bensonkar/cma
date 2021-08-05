import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AuthGuard} from '../../../shared/guard';
import { ApproveassessmentComponent } from './assessment/approve-assessment/approve-assessment.component';
import { CreateassessmentComponent } from './assessment/createassessment/createassessment.component';
import { ListassessmentComponent } from './assessment/listassessment/listassessment.component';
import { ViewassessmentComponent } from './assessment/view-assessment/view-assessment.component';
import { ApprovecontrolComponent } from './control/approve-control/approve-control.component';
import { CreatecontrolComponent } from './control/createcontrol/createcontrol.component';
import { ListcontrolComponent } from './control/listcontrol/listcontrol.component';
import { ViewcontrolComponent } from './control/view-control/view-control.component';
import { ApprovedomainComponent } from './domain/approve-domain/approve-domain.component';
import { CreatedomainComponent } from './domain/createdomain/createdomain.component';
import { ListdomainComponent } from './domain/listdomain/listdomain.component';
import { ViewdomainComponent } from './domain/view-domain/view-domain.component';
import { ApproveimpactsComponent } from './impacts/approve-impacts/approve-impacts.component';
import { CreateimpactsComponent } from './impacts/createimpacts/createimpacts.component';
import { ListimpactsComponent } from './impacts/listimpacts/listimpacts.component';
import { ViewimpactsComponent } from './impacts/view-impacts/view-impacts.component';
import { ApproveLicensesComponent } from './licences/approve-licenses/approve-licenses.component';
import { CreatelicensesComponent } from './licences/createlicenses/createlicenses.component';
import { ListlicensesComponent } from './licences/listlicenses/listlicenses.component';
import { ViewLicenseComponent } from './licences/view-license/view-license.component';
import { ApprovelikelyhoodComponent } from './likelyhood/approve-likelyhood/approve-likelyhood.component';
import { CreatelikelyhoodComponent } from './likelyhood/createlikelyhood/createlikelyhood.component';
import { ListlikelyhoodComponent } from './likelyhood/listlikelyhood/listlikelyhood.component';
import { ViewlikelyhoodComponent } from './likelyhood/view-likelyhood/view-likelyhood.component';
import { ApprovematuritylevelComponent } from './maturitylevel/approve-maturitylevel/approve-maturitylevel.component';
import { CreatematuritylevelComponent } from './maturitylevel/creatematuritylevel/creatematuritylevel.component';
import { ListmaturitylevelComponent } from './maturitylevel/listmaturitylevel/listmaturitylevel.component';
import { ViewmaturitylevelComponent } from './maturitylevel/view-maturitylevel/view-maturitylevel.component';
import { ApproveordersComponent } from './orders/approve-orders/approve-orders.component';
import { ListordersComponent } from './orders/listorders/listorders.component';
import { ApproveoveralriskdescriptionComponent } from './overalriskdescription/approve-overalriskdescription/approve-overalriskdescription.component';
import { CreateoveralriskdescriptionComponent } from './overalriskdescription/createoveralriskdescription/createoveralriskdescription.component';
import { ListoveralriskdescriptionComponent } from './overalriskdescription/listoveralriskdescription/listoveralriskdescription.component';
import { ApprovepaymentsComponent } from './payments/approve-payments/approve-payments.component';
import { ListpaymentsComponent } from './payments/listpayments/listpayments.component';
import { CreateprocedureexecutionattributesComponent } from './procedure-execution-attributes/createprocedure-execution-attributes/createprocedure-execution-attributes.component';
import { ListprocedureexecutionattributesComponent } from './procedure-execution-attributes/listprocedure-execution-attributes/listprocedure-execution-attributes.component';
import { ApproveproceduresComponent } from './procedures/approve-procedures/approve-procedures.component';
import { CreateproceduresComponent } from './procedures/createprocedures/createprocedures.component';
import { excuteproceduresComponent } from './procedures/excuteprocedures/excuteprocedures.component';
import { ListproceduresComponent } from './procedures/listprocedures/listprocedures.component';
import { ViewproceduresComponent } from './procedures/view-procedures/view-procedures.component';
import { ApproveriskmatrixComponent } from './riskmatrix/approve-riskmatrix/approve-riskmatrix.component';
import { CreateriskmatrixComponent } from './riskmatrix/createriskmatrix/createriskmatrix.component';
import { ListriskmatrixComponent } from './riskmatrix/listriskmatrix/listriskmatrix.component';
import { ViewriskmatrixComponent } from './riskmatrix/view-riskmatrix/view-riskmatrix.component';
import { UsersComponent } from './cma-users/users/users.component';
import { CreateUserComponent } from './cma-users/create-user/create-user.component';
import { AuditTrailsComponent } from './audit-trails/audit-trails.component';
import { ListRiskPtofileComponent } from './risk-profile/list-risk-ptofile/list-risk-ptofile.component';
import { CreateRiskPtofileComponent } from './risk-profile/create-risk-ptofile/create-risk-ptofile.component';
import { ViewRiskPtofileComponent } from './risk-profile/view-risk-ptofile/view-risk-ptofile.component';
import { ApproveRiskPtofileComponent } from './risk-profile/approve-risk-ptofile/approve-risk-ptofile.component';
import { UpdatePaymentComponent } from './payments/update-payment/update-payment.component';
import { UpdateRiskPtofileComponent } from './risk-profile/update-risk-ptofile/update-risk-ptofile.component';
import { UpdateOverralriskComponent } from './overalriskdescription/update-overralrisk/update-overralrisk.component';



const routes: Routes = [
  {
    path: '', data: {title: 'cma-management'}, children: [
      {path: 'licenses', component: ListlicensesComponent, canActivate: [AuthGuard]},
      {path: 'licenses/create-license', component: CreatelicensesComponent, canActivate: [AuthGuard]},
      {path: 'licenses/:id/view-license', component: ViewLicenseComponent, canActivate: [AuthGuard]},
      {path: 'licenses/activate-license', component: ApproveLicensesComponent, canActivate: [AuthGuard]},

      {path: 'riskmatrix', component: ListriskmatrixComponent, canActivate: [AuthGuard]},
      {path: 'riskmatrix/create-riskmatrix', component: CreateriskmatrixComponent, canActivate: [AuthGuard]},
      {path: 'riskmatrix/:id/view-riskmatrix', component: ViewriskmatrixComponent, canActivate: [AuthGuard]},
      {path: 'riskmatrix/approve-riskmatrix', component: ApproveriskmatrixComponent, canActivate: [AuthGuard]},


      {path: 'procedures', component: ListproceduresComponent, canActivate: [AuthGuard]},
      {path: 'procedures/create-procedures', component: CreateproceduresComponent, canActivate: [AuthGuard]},
      {path: 'procedures/:id/view-procedures', component: ViewproceduresComponent, canActivate: [AuthGuard]},
      {path: 'procedures/approve-procedures', component: excuteproceduresComponent, canActivate: [AuthGuard]},

      {path: 'procedure-execution-attributes', component: ListprocedureexecutionattributesComponent, canActivate: [AuthGuard]},
      {path: 'procedure-execution-attributes/create-procedure-execution-attributes', component: CreateprocedureexecutionattributesComponent, canActivate: [AuthGuard]},
     
      {path: 'overalriskdescription', component: ListoveralriskdescriptionComponent, canActivate: [AuthGuard]},
      {path: 'overalriskdescription/:id/update', component: UpdateOverralriskComponent, canActivate: [AuthGuard]},
      {path: 'overalriskdescription/create-overalriskdescription', component: CreateoveralriskdescriptionComponent, canActivate: [AuthGuard]},
      {path: 'overalriskdescription/approve-overalriskdescription', component: ApproveoveralriskdescriptionComponent, canActivate: [AuthGuard]},


      {path: 'maturitylevel', component: ListmaturitylevelComponent, canActivate: [AuthGuard]},
      {path: 'maturitylevel/create-maturitylevel', component: CreatematuritylevelComponent, canActivate: [AuthGuard]},
      {path: 'maturitylevel/:id/view-maturitylevel', component: ViewmaturitylevelComponent, canActivate: [AuthGuard]},
      {path: 'maturitylevel/approve-maturitylevel', component: ApprovematuritylevelComponent, canActivate: [AuthGuard]},

      {path: 'likelyhood', component: ListlikelyhoodComponent, canActivate: [AuthGuard]},
      {path: 'likelyhood/create-likelyhood', component: CreatelikelyhoodComponent, canActivate: [AuthGuard]},
      {path: 'likelyhood/:id/view-likelyhood', component: ViewlikelyhoodComponent, canActivate: [AuthGuard]},
      {path: 'likelyhood/approve-likelyhood', component: ApprovelikelyhoodComponent, canActivate: [AuthGuard]},
      
      {path: 'impacts', component: ListimpactsComponent, canActivate: [AuthGuard]},
      {path: 'impacts/create-impacts', component: CreateimpactsComponent, canActivate: [AuthGuard]},
      {path: 'impacts/:id/view-impacts', component: ViewimpactsComponent, canActivate: [AuthGuard]},
      {path: 'impacts/approve-impacts', component: ApproveimpactsComponent, canActivate: [AuthGuard]},

      {path: 'domain', component: ListdomainComponent, canActivate: [AuthGuard]},
      {path: 'domain/create-domain', component: CreatedomainComponent, canActivate: [AuthGuard]},
      {path: 'domain/:id/view-domain', component: ViewdomainComponent, canActivate: [AuthGuard]},
      {path: 'domain/approve-domain', component: ApprovedomainComponent, canActivate: [AuthGuard]},

      {path: 'control', component: ListcontrolComponent, canActivate: [AuthGuard]},
      {path: 'control/create-control', component: CreatecontrolComponent, canActivate: [AuthGuard]},
      {path: 'control/:id/view-control', component: ViewcontrolComponent, canActivate: [AuthGuard]},
      {path: 'control/approve-control', component: ApprovecontrolComponent, canActivate: [AuthGuard]},


      {path: 'assessment', component: ListassessmentComponent, canActivate: [AuthGuard]},
      {path: 'assessment/create-assessment', component: CreateassessmentComponent, canActivate: [AuthGuard]},
      {path: 'assessment/:id/view-assessment', component: ViewassessmentComponent, canActivate: [AuthGuard]},
      {path: 'assessment/approve-assessment', component: ApproveassessmentComponent, canActivate: [AuthGuard]},


      {path: 'orders', component: ListordersComponent, canActivate: [AuthGuard]},
      {path: 'orders/approve-orders', component: ApproveordersComponent, canActivate: [AuthGuard]},


      {path: 'payments', component: ListpaymentsComponent, canActivate: [AuthGuard]},
      {path: 'payments/approve-payments', component: ApprovepaymentsComponent, canActivate: [AuthGuard]},
      {path: 'payments/:id/update', component: UpdatePaymentComponent, canActivate: [AuthGuard]},

      {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
      {path: 'create-cma-user', component: CreateUserComponent, canActivate: [AuthGuard]},

      {path: 'audit-trails', component: AuditTrailsComponent, canActivate: [AuthGuard]},

      {path: 'risk-profile', component: ListRiskPtofileComponent, canActivate: [AuthGuard]},
      {path: 'risk-profile/create-risk-profile', component: CreateRiskPtofileComponent, canActivate: [AuthGuard]},
      {path: 'risk-profile/:id/view-risk-profile', component: ViewRiskPtofileComponent, canActivate: [AuthGuard]},
      {path: 'risk-profile/:id/update-risk-profile', component: UpdateRiskPtofileComponent, canActivate: [AuthGuard]},
      {path: 'risk-profile/approve-risk-profile', component: ApproveRiskPtofileComponent, canActivate: [AuthGuard]},

  
    ]
    
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmaRoutingModule { }
