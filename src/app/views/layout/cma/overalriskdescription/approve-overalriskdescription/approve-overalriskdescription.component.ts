import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-approve-overalriskdescription',
  templateUrl: './approve-overalriskdescription.component.html',
  styleUrls: ['./approve-overalriskdescription.component.scss']
})
export class ApproveoveralriskdescriptionComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'overal-risk-description/viewAll/64';
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
      title: 'Risk Name',
      data: 'riskName'
    });
    this.cols.push({
      title: 'Risk Description',
      data: 'riskDescription'
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
