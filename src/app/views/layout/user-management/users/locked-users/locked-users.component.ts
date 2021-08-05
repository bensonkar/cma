import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {DatatableColumns} from '../../../../../entities/datatable/datatable-columns';
import {StewardService} from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-locked-users',
  templateUrl: './locked-users.component.html',
  styleUrls: ['./locked-users.component.scss']
})
export class LockedUsersComponent implements OnInit {

  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'payments/viewAll';
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/user-management/users/{0}/view-user';
  users:any = [];
  constructor(
    private stewardService: StewardService<any, any>,
  ) {
    this.cols = [];
    this.params = new Map();

    this.params.set('sort', 'id,desc');
  }

  ngOnInit() {


    this.cols.push({
      isCheckBox: true,
      title: '',
      data: 'id',
    });
  
    this.cols.push({
      title: 'Email',
      data: 'emailAddress',
    });
    this.cols.push({
      title: 'Payment Mode',
      data: 'paymentMode'
    });
    this.cols.push({
      title: 'Payment Reference',
      data: 'paymentReference'
    });
    this.cols.push({
      title: 'Amount',
      data: 'amount'
    });
    this.cols.push({
      title: 'Action Status',
      data: 'customerOrders.actionStatus'
    });
 

  }


}
