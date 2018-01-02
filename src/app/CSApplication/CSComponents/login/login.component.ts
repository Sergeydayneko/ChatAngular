import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './model/userModel';
import {PasswordValidation} from './helpers/PasswordValidation';

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  imageSource = "https://cdn2.iconfinder.com/data/icons/blockchain/500/blockchain_12-512.png";
  regForm : FormGroup;
  loading = false;
  user: User = new User();


  constructor(private router: Router,
              private regService: LoginService,
              private formBuilder: FormBuilder)
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

  }


}
