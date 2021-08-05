import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-list-riskmatrix',
  templateUrl: './listriskmatrix.component.html',
  styleUrls: ['./listriskmatrix.component.scss']
})
export class ListriskmatrixComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'risk-matrix/viewAll/64';
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/cma-management/riskmatrix/{0}/view-riskmatrix';
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
      title: 'Risk Matrix Name',
      data: 'riskMatrixName'
    });
    this.cols.push({
      title: 'Risk Level Low Limit',
      data: 'riskLevelLowLimit'
    });
    this.cols.push({
      title: 'Risk Level Upper Limit',
      data: 'riskLevelUpperLimit',
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
    this.cols.push({
      title: 'View',
      data: 'id',
      isViewMore: true
    });

  }

}
