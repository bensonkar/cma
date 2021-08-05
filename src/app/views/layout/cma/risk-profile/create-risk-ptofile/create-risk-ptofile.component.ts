import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomerModel } from '../../../../../entities/customer-model';
import { StewardService } from '../../../../../shared/services/steward/steward.service';
import { Notify } from '../../../../../shared/class/notify';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-risk-ptofile',
  templateUrl: './create-risk-ptofile.component.html',
  styleUrls: ['./create-risk-ptofile.component.css']
})
export class CreateRiskPtofileComponent implements OnInit {

  userId = localStorage.getItem('LoggedInUserId')
  form:FormGroup;
  isUpdate: boolean;
  isReadOnly = false;
  disabled = false;
  isView = false;
  impacts = [];
  likelyhoods = [];
  risks = [];
  
  constructor(
    private _formBuilder: FormBuilder,
    private stewardService: StewardService<any, any>,
    private notify: Notify,
    protected router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void {
   

    this.form = this.fb.group({
      impactId:['',Validators.required],
      inputterComments:['',Validators.required],
      likelyhoodId:['',Validators.required],
      riskId:['',Validators.required],
      userId:['',Validators.required],
    });

    this.stewardService.getNoToken('impacts/viewAll/'+this.userId).subscribe((response) => {
      if (response.code === 200) {
          this.impacts = response.data;
      } else {
          this.notify.showWarning(response.message);
      }
  });

  this.stewardService.getNoToken('likelyhood/viewAll/'+this.userId).subscribe((response) => {
    if (response.code === 200) {
        this.likelyhoods = response.data;
    } else {
        this.notify.showWarning(response.message);
    }
});

this.stewardService.getNoToken('overal-risk-description/viewAll/'+this.userId).subscribe((response) => {
  if (response.code === 200) {
      this.risks = response.data;
  } else {
      this.notify.showWarning(response.message);
  }
});
  }

  onCreateForm() {
    this.form.get('userId').setValue(this.userId);
    console.log('values *********************** ',this.form.value);
    
    this.stewardService.postNoToken('risk-profile/create',this.form.value).subscribe((response:any) => {

      if (response.code === 200) {
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/cma-management/risk-profile']);
      } else {
        this.notify.showWarning(response.message.message);
      }
    }, error => {
      this.notify.showWarning(error.error.message);
    });
  }



}
