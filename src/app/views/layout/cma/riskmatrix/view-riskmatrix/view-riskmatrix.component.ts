import { Component, OnInit } from '@angular/core';
import { StewardService } from '../../../../../shared/services/steward/steward.service';
import { Notify } from '../../../../../shared/class/notify';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { data } from 'jquery';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-riskmatrix',
  templateUrl: './view-riskmatrix.component.html',
  styleUrls: ['./view-riskmatrix.component.css']
})
export class ViewriskmatrixComponent implements OnInit {
  userId = localStorage.getItem('LoggedInUserId');
  subscription: Subscription;
  id: number;
  form: FormGroup;
  data: any
  waiting = true;
  buttonDisabled = false;

  constructor(private stewardService: StewardService<any, any>,
    private notify: Notify, private fb: FormBuilder,
    protected router: Router,  private route: ActivatedRoute,) {
      this.subscription = new Subscription();
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if (params['id'] != null) {
        this.id = params['id'];
        this.fetchData(params['id']);
      }
  });
      this.form = this.fb.group({
        riskLevelLowLimit:['',Validators.required],
        riskLevelUpperLimit:['',Validators.required],
        riskMatrixName:['',Validators.required],
      });

  }

  fetchData(id) {
   this.subscription.add(
    this.stewardService.get(`risk-matrix/view/${this.userId}/${id}`).subscribe(response => {
      if (response.code === 200) {
        this.data = response.data;
        this.form.get('riskLevelLowLimit').setValue(this.data.riskLevelLowLimit);
        this.form.get('riskLevelUpperLimit').setValue(this.data.riskLevelUpperLimit);
        this.form.get('riskMatrixName').setValue(this.data.riskMatrixName);
      }
    })
   );
  }

submit() {
  this.buttonDisabled = true;
    this.stewardService.putNoToken(`risk-matrix/update/${this.userId}/${this.id}`,this.form.value).subscribe(response =>{
      this.buttonDisabled = true;
      if (response.code === 200) {
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/cma-management/riskmatrix']);
      } else {
        this.notify.showWarning(response.message);
        this.buttonDisabled = false;
      }
    }, error => {
      this.buttonDisabled = false;
    });
}

}
