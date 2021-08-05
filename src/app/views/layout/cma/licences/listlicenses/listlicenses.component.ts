import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listlicenses',
  templateUrl: './listlicenses.component.html',
  styleUrls: ['./listlicenses.component.scss']
})
export class ListlicensesComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'licence/viewAll/64';
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
      title: 'Licence Ref',
      data: 'lincenceRef'
    });
    this.cols.push({
      title: 'Lincence Tracking Ref',
      data: 'lincenceTrackingRef'
    });
    this.cols.push({
      title: 'Lincence Vality',
      data: 'lincenceVality',
    });
    this.cols.push({
      title: 'Lincence Expiry Date',
      data: 'lincenceExpiryDate',
      isDate: true
    });
    this.cols.push({
      title: 'Status',
      data: 'actionStatus'
    });
    this.cols.push({
      title: 'Renewed Date',
      data: 'renewedDate',
      isDate: true
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
