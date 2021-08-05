import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';

import { from, Subscription } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerModel } from '../../../../../entities/customer-model';
import { StewardService } from '../../../../../shared/services/steward/steward.service';
import { Notify } from '../../../../../shared/class/notify';
import { Observable } from 'rxjs';
// sanitize the base64string

import { NumericValueType, ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-createlicenses',
  templateUrl: './createlicenses.component.html',
  styleUrls: ['./createlicenses.component.css']
})
export class CreatelicensesComponent implements OnInit, OnDestroy {
  
  model: CustomerModel;
  subscription: Subscription;
  customer: FormGroup;
  customerModel:FormGroup;
  isUpdate: boolean;
  isReadOnly = false;
  disabled = false;
  isView = false;
  clients:any;
  client_id:any;

  username:any;
  password:any;

  isResponse = false;
  
  constructor(
    private _formBuilder: FormBuilder,
    private stewardService: StewardService<any, any>,
    private notify: Notify,
    protected router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    this.model = new CustomerModel();
    this.subscription = new Subscription();
    }

  ngOnInit(): void {
    this.stewardService.get('client/viewAll').subscribe((response) => {

      if (response) {
        this.clients = response.data;

    } else {
        this.notify.showWarning(response.message);
    }
  });

    this.customerModel = this.fb.group({
      licenceRef: ['',Validators.required],
      clients:['',Validators.required],
     
    })
  }

  onCreateForm() {
    
    this.stewardService.post(`licence/generate/64/${this.customerModel.value.clients}`, {"licenceRef":this.customerModel.value.licenceRef}).subscribe((response:any) => {

      if (response.code === 200) {
        this.notify.showSuccess(response.message);
      this.username = response.data.detailsToSendToUser.userName
      this.password =response.data.detailsToSendToUser.password
        // this.router.navigate(['home/cma-management/licenses']);
        this.isResponse = true;
      } else {
        this.notify.showWarning(response.message);
      }
    }, error => {
      this.notify.showWarning(error.error.message);
    });
  }

  okay(){
     this.router.navigate(['home/cma-management/licenses']);
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
