import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-list-procedures',
  templateUrl: './listprocedures.component.html',
  styleUrls: ['./listprocedures.component.scss']
})
export class ListproceduresComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'procedures/viewAll/64';
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/cma-management/procedures/{0}/view-procedures';
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
      title: 'Procedure Name',
      data: 'procedureName'
    });
    this.cols.push({
      title: 'Procedure Description',
      data: 'procedureDescription'
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
