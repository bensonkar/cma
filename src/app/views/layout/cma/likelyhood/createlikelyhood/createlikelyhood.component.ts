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
  selector: 'app-createlikelyhood',
  templateUrl: './createlikelyhood.component.html',
  styleUrls: ['./createlikelyhood.component.css']
})
export class CreatelikelyhoodComponent implements OnInit, OnDestroy {
  
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
      
      likelyhood:['',Validators.required],
      probability:['',Validators.required],
      rating:['',Validators.required],
    })
  }

  onCreateForm() {
    
    this.stewardService.post('likelyhood/create/64', this.customerModel.value).subscribe((response:any) => {

      if (response.code === 200) {
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/cma-management/likelyhood']);
      } else {
        this.notify.showWarning(response.message);
      }
    }, error => {
      this.notify.showWarning(error.error.message);
    });
  }

  @HostListener('window:beforeunload')
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
