import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-audit-trails',
  templateUrl: './audit-trails.component.html',
  styleUrls: ['./audit-trails.component.css']
})
export class AuditTrailsComponent implements OnInit {
  model: any = {};
  userId = localStorage.getItem('LoggedInUserId');
  cols: Array<DatatableColumns>;
  endpoint = 'audit-rails/view-all/'+this.userId;
  hasCheckBox = false;
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
      isCheckBox: false,
      title: 'ID',
      data: 'id',
    });
    this.cols.push({
      title: 'Activity',
      data: 'activityType'
    });
    this.cols.push({
      title: 'Description',
      data: 'description'
    });
    this.cols.push({
      title: 'Company',
      data: 'companyName',
    });
    this.cols.push({
      title: 'Ip Address',
      data: 'ipAddress'
    });
    this.cols.push({
      title: 'User',
      data: 'user'
    });
    this.cols.push({
      title: 'Created Date',
      data: 'insertionDate',
      isDate: true
    });

  }
}
