import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listassessment',
  templateUrl: './listassessment.component.html',
  styleUrls: ['./listassessment.component.scss']
})
export class ListassessmentComponent implements OnInit {
  model: any = {};
  userId = localStorage.getItem('LoggedInUserId');
  cols: Array<DatatableColumns>;
  endpoint = 'procedure-assessment/viewAll/'+this.userId;
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/cma-management/assessment/{0}/view-assessment';
  users:any = [];
  constructor(
    private stewardService: StewardService<any, any>,
  ) {
    this.cols = [];
    this.params = new Map();

    this.params.set('sort', 'id,desc');
  }

  ngOnInit() {
    // if (!localStorage.getItem('foo')) { 
    //   localStorage.setItem('foo', 'no reload') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('foo') 
    // }

    this.cols.push({
      isCheckBox: true,
      title: '',
      data: 'id',
    });
    this.cols.push({
      title: 'assessment Name',
      data: 'assessmentName'
    });
    this.cols.push({
      title: 'startDate',
      data: 'startDate',
      isDate: true
    });

    this.cols.push({
      title: 'endDate',
      data: 'endDate',
      isDate: true
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
      data: 'id',
      title: 'View',
      isViewMore: true,
    });

  }

}
