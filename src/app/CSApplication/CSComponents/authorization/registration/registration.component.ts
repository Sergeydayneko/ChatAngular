import {Component, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService} from '../service/registration.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/userModel';
import {PasswordValidation} from '../helpers/PasswordValidation';
import {AlertService} from '../service/alert.service';
import {Observable} from 'rxjs/Observable';
import {ExitRegistrationGuard} from '../guards/registration.guard';

@Component({
  selector: 'cs-login',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

  imageSource = "https://cdn2.iconfinder.com/data/icons/blockchain/500/blockchain_12-512.png";
  regForm : FormGroup;
  loading = false;
  notFill = true;
  user: User = new User();


  constructor(private router: Router,
              private regService: RegistrationService,
              private formBuilder: FormBuilder,
              private alertService: AlertService
             )
  {
      this.regForm = formBuilder.group({
        'confirmPassword': ['', Validators.required],
        'login'          : ['', Validators.required],
        'agreement'      : ['', Validators.required],
        'email'          : ['', [Validators.required,
                                 Validators.pattern("^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*")]],
        'password'       : ['', [Validators.required,
                                 Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
        }, {
        validator: PasswordValidation.MatchPassword
      })
  }

  register() {
    this.loading = true;
    this.regService.userRegistration(this.user)
      .subscribe(
          data => {
            console.log(data);
            this.alertService.success('Successful registration', true)
          },
          error => {
            console.log(error);
            this.alertService.error(error);
            this.loading = false;
          }
      )
  }

  //TODO Complete form starting validation
  @HostListener("click", ['$event'])
  fulfillStarted(event: Event) {
    this.notFill = false;
  }

  canDeactivate() : boolean | Observable<boolean>{
    return this.notFill;
  }

}
