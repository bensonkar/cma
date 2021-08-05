import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-approve-assessment',
  templateUrl: './approve-assessment.component.html',
  styleUrls: ['./approve-assessment.component.scss']
})
export class ApproveassessmentComponent implements OnInit {
  model: any = {};
  cols: Array<DatatableColumns>;
  endpoint = 'assessment/viewAll/64';
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
      title: 'Impact Name',
      data: 'impactName'
    });
    this.cols.push({
      title: 'Rating',
      data: 'rating'
    });
    this.cols.push({
      title: 'Criteria',
      data: 'criteria',
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
