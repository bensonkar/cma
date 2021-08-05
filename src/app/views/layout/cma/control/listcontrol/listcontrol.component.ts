import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listcontrol',
  templateUrl: './listcontrol.component.html',
  styleUrls: ['./listcontrol.component.scss']
})
export class ListcontrolComponent implements OnInit {
  model: any = {};
  userId = localStorage.getItem('LoggedInUserId');
  cols: Array<DatatableColumns>;
  endpoint = 'control/viewAll/'+this.userId;
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/cma-management/control/{0}/view-control';
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
      title: 'control Name',
      data: 'controlName'
    });
    this.cols.push({
      title: 'Control Statement',
      data: 'controlStatement'
    });

    this.cols.push({
      title: 'Control Standard',
      data: 'controlStandard'
    });

    this.cols.push({
      title: 'Control Standard Clause',
      data: 'controlStandardClause'
    });
  
    this.cols.push({
      title: 'actionStatus',
      data: 'actionStatus',
    });
    this.cols.push({
      title: 'Creation Date',
      data: 'creationDate',
      isDate: true
    });
    this.cols.push({
      title: 'View',
      data: 'id',
      isViewMore: true
    });

  }

}
