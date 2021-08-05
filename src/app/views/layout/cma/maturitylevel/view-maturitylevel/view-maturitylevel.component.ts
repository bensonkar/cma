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
  selector: 'app-view-maturitylevel',
  templateUrl: './view-maturitylevel.component.html',
  styleUrls: ['./view-maturitylevel.component.css']
})
export class ViewmaturitylevelComponent implements OnInit {
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
        name:['',Validators.required],
        description:['',Validators.required],
        range:['',Validators.required],
        overalReadinessLevel:['',Validators.required],
        lowerRange: ['',Validators.required],
        upperRange: ['',Validators.required]
      });

  }

  fetchData(id) {
   this.subscription.add(
    this.stewardService.get(`maturity-level/view/${this.userId}/${id}`).subscribe(response => {
      if (response.code === 200) {
        this.data = response.data;
        this.form.get('name').setValue(this.data.name);
        this.form.get('description').setValue(this.data.description);
        this.form.get('range').setValue(this.data.range);
        this.form.get('overalReadinessLevel').setValue(this.data.overalReadinessLevel);
        this.form.get('lowerRange').setValue(this.data.lowerRange);
        this.form.get('upperRange').setValue(this.data.upperRange);
      }
    })
   );
  }

submit() {
  this.buttonDisabled = true;
    this.stewardService.putNoToken(`maturity-level/update/${this.userId}/${this.id}`,this.form.value).subscribe(response =>{
      this.buttonDisabled = true;
      if (response.code === 200) {
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/cma-management/maturitylevel']);
      } else {
        this.notify.showWarning(response.message);
        this.buttonDisabled = false;
      }
    }, error => {
      this.buttonDisabled = false;
    });
}
}
