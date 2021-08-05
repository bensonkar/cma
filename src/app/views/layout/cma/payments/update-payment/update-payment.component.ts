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
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {
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
        amount: [Validators.required],
        emailAddress: [Validators.required],
        paymentMode: [Validators.required],
        paymentReference: [Validators.required]
      });

  }

  fetchData(id) {
    this.subscription.add(
     this.stewardService.get(`payments/view/${id}`).subscribe(response => {
       if (response.code === 200) {
         this.data = response.data;
         this.form.get('amount').setValue(this.data.amount);
         this.form.get('emailAddress').setValue(this.data.emailAddress);
         this.form.get('paymentMode').setValue(this.data.paymentMode);
         this.form.get('paymentReference').setValue(this.data.paymentReference);
       }
     })
    );
   }

submit() {
  this.buttonDisabled = true;
    this.stewardService.putNoToken(`payments/update/${this.userId}/${this.id}`,this.form.value).subscribe(response =>{
      if (response.code === 200) {
        this.notify.showSuccess(response.message);
        this.router.navigate(['home/cma-management/payments']);
      } else {
        this.notify.showWarning(response.message);
        this.buttonDisabled = false;
      }
    }, error => {
      this.buttonDisabled = false;
    });
}

}
