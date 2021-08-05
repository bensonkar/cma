import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listlikelyhood',
  templateUrl: './listlikelyhood.component.html',
  styleUrls: ['./listlikelyhood.component.scss']
})
export class ListlikelyhoodComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'likelyhood/viewAll/64';
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
      title: 'Likely Hood',
      data: 'likelyhood'
    });
    this.cols.push({
      title: 'Rating',
      data: 'rating'
    });
    this.cols.push({
      title: 'Probability',
      data: 'probability',
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

  }

}
