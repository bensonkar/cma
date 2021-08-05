import { Component, OnInit } from '@angular/core';
import { DatatableColumns } from '../../../../../entities/datatable/datatable-columns';
import { StewardService } from '../../../../../shared/services/steward/steward.service';

@Component({
  selector: 'app-listdomain',
  templateUrl: './listdomain.component.html',
  styleUrls: ['./listdomain.component.scss']
})
export class ListdomainComponent implements OnInit {
  model: any = {};
  userId = localStorage.getItem('LoggedInUserId');
  cols: Array<DatatableColumns>;
  endpoint = 'domain/viewAll/'+this.userId;
  hasCheckBox = true;
  idColumn = 'id';
  params: Map<any, string>;
  routeView = '/home/cma-management/domain/{0}/view-domain';
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
      title: 'Domain Name',
      data: 'domainName'
    });
    this.cols.push({
      title: 'Domain Description',
      data: 'domainDescription'
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
