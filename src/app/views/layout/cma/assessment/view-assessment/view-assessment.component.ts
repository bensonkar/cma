import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit,ViewChild } from '@angular/core';

import {MatAccordion} from '@angular/material/expansion';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { StewardService } from '../../../../../shared/services/steward/steward.service';
import { Notify } from '../../../../../shared/class/notify';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Review } from './Review';
import { Attributes } from './Attibutes';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrepareProcedure } from './Prepare';

@Component({
  selector: 'app-view-assessment',
  templateUrl: './view-assessment.component.html',
  styleUrls: ['./view-assessment.component.css']
})
export class ViewassessmentComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  procedures = [];
  attributes: Array<any> = [];
  userId = localStorage.getItem('LoggedInUserId');
  displayedRows$: any;
  subscription: Subscription;
  id: number;
  data: any;
  assessmentData = [];
  graphData = [];
  form: FormGroup;
  checked = true;
  listOfProcedureExecutionIds = [];
  model: Review;
  fileForm: FormGroup;
  procedureId: any;
  attributesIds = [];
  attributesData: Attributes;
  checkAttribute = true;
  update = true;
  @ViewChild('modal') public modal:ModalDirective;
  @ViewChild('cont') modal2: ModalDirective;
  closeModal = false;
  preparedIds: PrepareProcedure;
  buttonDisabled = false;
  executionId: any;
  public demoradarChartLabels:string[] = [];
  public demoradarChartData:Array<any> = [];
  lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  // public demoradarChartData:any = [
  //   { data: [300, 450, 500, 810, 540, 150], label: 'Domain Score' },
  //   { data: [500, 500, 550, 900, 550, 400], label: 'Bench Mark' }
  // ];


  constructor(private stewardService: StewardService<any, any>,
    private notify: Notify, private modalService: NgbModal,
    protected router: Router,  private route: ActivatedRoute,private fb: FormBuilder) {
      this.subscription = new Subscription();
      this.model = new Review();
      this.attributesData = new Attributes();
      this.preparedIds = new PrepareProcedure();
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.id = params['id'];
        console.log('id from param ',params['id']);
      }
  });
  this.fileForm = this.fb.group({
    file: File
  });
  this.form = this.fb.group({
    isIssueNoted: [],
    observation: []
  });
 this.getPushAttributes();
  this.stewardService.get(`procedure-execution-attribute/viewAll/${this.userId}`).subscribe((response) => {
    if (response.code === 200) {
      this.attributes = response.data;      
  } else {
      this.notify.showWarning(response.message);
  }
});
    this.stewardService.get(`procedure-assessment/view/${this.userId}/${this.id}`).subscribe((response) => {
      if (response.code === 200) {
        this.data = response.data;
        this.assessmentData = response.data.assessmentGraphData.domainsDataForGraph;
        this.procedures = response.data.procedures;
        this.demoradarChartLabels = response.data.newAssessmentGraphData.domains;
        this.demoradarChartData.push({ data: [response.data.newAssessmentGraphData.domainsScore], label: 'Domains score' });
        this.demoradarChartData.push({ data: [response.data.newAssessmentGraphData.domainsBenchMarkScore], label: 'Benchmark score' });
        this.demoradarChartData.push({ data: [response.data.newAssessmentGraphData.numberOfControlsInDomain], label: 'Control domains' });
        console.log('********************** ',this.procedures);
        
    } else {
        this.notify.showWarning(response.message);
    }
  });
  }

  dataDisplay() {
    if (this.graphData.length > 0) {
      
    }
  }

  
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  getProcedureId(id) {
    this.procedureId = id;
  }

  getExecutionId(id) {
    // procedureExecution.id
    this.executionId = id;
  }

  fileChange(event) {
    if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.fileForm.get('file').setValue(file);
      }
}

getAttributeId(id) {
      if (!this.attributesIds.includes(id)) {
        this.attributesIds.push(id);
      console.log('my pushed attribute ids ',this.attributesIds);
      } else {
    const index = this.attributesIds.indexOf(id);
        this.attributesIds.splice(index,1);
        console.log('my remaining attribute ids ',this.attributesIds);
  }
}

getPushAttributes() {
  if (this.attributes.length > 0) {
    const index = this.attributes.indexOf(index => index.id === 420);
  console.log('index ****************  ',index);
  } else {
    console.log('no data');
  }
}

submit() {
  this.buttonDisabled = true;
  this.stewardService.postFormDataNoToken(`execution-evidence/uploadFile`, this.fileForm.value).subscribe((response: any) => {    
    if (response) {
      console.log('file uploaded');
    } else {
      this.notify.showDanger(response.message.message);
      return;
    }
  });
  
  this.stewardService.postNoToken(`procedure-execution/execute/${this.userId}/${this.id}/${this.procedureId}`, this.form.value).subscribe((response: any) => {
    this.buttonDisabled = false;
    if (response.code ===200) {
      this.notify.showDanger(response.message);
      this.modalService.dismissAll();
    } else {
      this.notify.showDanger(response.message.message);
      return;
    }
  })
}

submitAttributes() {
  if (this.attributesIds.length < 1) {
    this.notify.showWarning('please select atleast one attribute');
    return;
  }
  if (this.procedureId === undefined) {
    this.notify.showWarning('please select one procedure to check attribute');
  }


  this.attributesData.listOfCheckedAttributesIds = this.attributesIds;
  console.log('attributes ids   ',this.attributesIds);
  
 for(let k of this.attributesIds) {
  const id = this.attributes.findIndex(index => index.id === k);
  console.log('id     ', id);
  
  if (id) {
    this.attributesData.procedureExecutionAttributesChecks.push("yes");
  } else {
    this.attributesData.procedureExecutionAttributesChecks.push("no");
  }
 }
 this.buttonDisabled = true;
  this.stewardService.putNoToken(`procedure-execution/attributes-check/${this.userId}/${this.id}`, this.attributesData).subscribe((response: any) => {
    this.buttonDisabled = false;
    if (response.code ===200) {
      this.modalService.dismissAll();
      this.notify.showDanger(response.message);
    } else {      
      this.notify.showDanger(response.message.message);
    }
  });
}
open(content) {
 this.modalService.open(content,{ size: "lg" });
}

openModal(con) {
  this.modalService.open(con);
}
openAttribute(attribute) {
  this.modalService.open(attribute, { size: "lg" });
}

close() {
  this.modalService.dismissAll();
}

  pushIds(id: any) {
        if (!this.listOfProcedureExecutionIds.includes(id)) {
          this.listOfProcedureExecutionIds.push(id);
          console.log('my pushed ids ',this.listOfProcedureExecutionIds);
        }
       else {
        const index = this.listOfProcedureExecutionIds.indexOf(id);
        this.listOfProcedureExecutionIds.splice(index,1);
        console.log('my remaining ids ',this.listOfProcedureExecutionIds);
      }
  }

  submitReview() {
    if (this.listOfProcedureExecutionIds.length < 1) {
      this.notify.showWarning('please select atleast one entry');
      return;
    }
    this.model.listOfProcedureExecutionIds = this.listOfProcedureExecutionIds; 
    this.buttonDisabled = true;   
    this.stewardService.putNoToken(`procedure-execution/review/${this.userId}`, this.model).subscribe((response: any) => {
      this.buttonDisabled = false;
      if (response.code === 200) {
        this.notify.showSuccess(response.message);
        this.modalService.dismissAll();
      } else {
        this.modalService.dismissAll();
        this.notify.showDanger(response.message.message);
      }
    });
  }

  prepare() {
    if (this.listOfProcedureExecutionIds.length < 1) {
      this.notify.showWarning('please select atleast one entry');
      return;
    }
    this.preparedIds.listOfIds = this.listOfProcedureExecutionIds;
    
    this.buttonDisabled = true;
    this.stewardService.putNoToken(`procedure-execution/prepare/${this.userId}`, this.preparedIds).subscribe((response: any) => {
      this.buttonDisabled = false;
      if (response.code === 200) {
        this.notify.showSuccess(response.message);
      } else {
        this.notify.showDanger(response.message.message);
      }
    });
  }
  unPrepare() {
    if (this.listOfProcedureExecutionIds.length < 1) {
      this.notify.showWarning('please select atleast one entry');
      return;
    }
    this.preparedIds.listOfIds = this.listOfProcedureExecutionIds;
    this.buttonDisabled = true;
    this.stewardService.putNoToken(`procedure-execution/unprepare/${this.userId}`, this.preparedIds).subscribe((response: any) => {
      this.buttonDisabled = false;
      if (response.code === 200) {
        this.notify.showSuccess(response.message);
      } else {
        this.notify.showDanger(response.message.message);
      }
    });
  }

 

}
