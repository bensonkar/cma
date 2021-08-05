import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';


@Component({
  selector: 'app-list-risk-ptofile',
  templateUrl: './list-risk-ptofile.component.html',
  styleUrls: ['./list-risk-ptofile.component.css']
})
export class ListRiskPtofileComponent implements OnInit {
  model: any = {};
  userId = localStorage.getItem('LoggedInUserId');
  cols: Array<DatatableColumns>;
  endpoint = 'risk-profile/viewAll/'+this.userId;
  hasCheckBox = true;
  idColumn = 'riskId';
  params: Map<any, string>;
  routeView = '/home/cma-management/risk-profile/{0}/update-risk-profile';
  users:any = [];
  constructor(
    private stewardService: StewardService<any, any>,
  ) {
    this.cols = [];
    this.params = new Map();

    this.params.set('sort', 'riskId,desc');
  }

  ngOnInit() {


    this.cols.push({
      isCheckBox: true,
      title: '',
      data: 'id',
    });
    this.cols.push({
      title: 'Risk',
      data: 'overalRiskDescription.riskName'
    });
    this.cols.push({
      title: 'Likelihood',
      data: 'likelyhood.likelyhood'
    });
    this.cols.push({
      title: 'Impact',
      data: 'impacts.impactName',
    });

    this.cols.push({
      title: 'Accesser Name',
      data: 'accesserName'
    });
    this.cols.push({
      title: 'ActionStatus',
      data: 'actionStatus'
    });
    this.cols.push({
      title: 'View',
      data: 'id',
      isViewMore: true
    });

  }

}
