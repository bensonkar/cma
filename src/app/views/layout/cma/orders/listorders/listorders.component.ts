import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.scss']
})
export class ListordersComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'customer-order/viewAll';
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
      title: 'First Name',
      data: 'firstName'
    });
    this.cols.push({
      title: 'Last Name',
      data: 'lastName'
    });
    this.cols.push({
      title: 'Email',
      data: 'email',
    });
    this.cols.push({
      title: 'Industry',
      data: 'industry'
    });
    this.cols.push({
      title: 'Company',
      data: 'company'
    });
    this.cols.push({
      title: 'Number Of Employes',
      data: 'numberOfEmployes'
    });
    this.cols.push({
      title: 'Status',
      data: 'actionStatus'
    });
    this.cols.push({
      title: 'Created Date',
      data: 'creationDate',
      isDate: true
    });
    // this.cols.push({
    //   title: 'View',
    //   data: 'id',
    //   isViewMore: true
    // });

  }

}
