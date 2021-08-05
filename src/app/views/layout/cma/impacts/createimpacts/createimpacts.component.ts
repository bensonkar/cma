import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild } from '@angular/core';

import { from, Subscription } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray,AbstractControl,NgForm, Validators } from '@angular/forms';
import { CustomerModel } from '../../../../../entities/customer-model';
import { StewardService } from '../../../../../shared/services/steward/steward.service';
import { Notify } from '../../../../../shared/class/notify';
import { Observable } from 'rxjs';
// sanitize the base64string

import { NumericValueType, ReactiveFormConfig, RxwebValidators } from '@rxweb/reactive-form-validators';


@Component({
  selector: 'app-createimpacts',
  templateUrl: './createimpacts.component.html',
  styleUrls: ['./createimpacts.component.css']
})
export class CreateimpactsComponent implements OnInit, OnDestroy {
  
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
      
      name:['',Validators.required],
      criterias:this.fb.array([
        this.fb.control(null)
      ]),
      rating:['',Validators.required],
    })
  }

  addCriterias(): void {
    (this.customerModel.get('criterias') as FormArray).push(
      this.fb.control(null)
    );
  }

  removeCriterias(index) {
    (this.customerModel.get('criterias') as FormArray).removeAt(index);
  }

  getCriteriasFormControls(): AbstractControl[] {
    return (<FormArray> this.customerModel.get('criterias')).controls
  }

  onCreateForm() {
    
    this.stewardService.post('impacts/create/64', this.customerModel.value).subscribe((response:any) => {

      if (response.code === 200) {
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/cma-management/impacts']);
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
