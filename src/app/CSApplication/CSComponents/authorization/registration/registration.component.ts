import {Component, HostListener} from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationService} from "../service/registration.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "../model/userModel";
import {PasswordValidation} from "../helpers/PasswordValidation";
import {Observable} from "rxjs/Observable";

@Component({
  selector: "cs-login",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
})
export class RegistrationComponent {
  regForm: FormGroup;
  loading = false;
  notFill = true;
  user: User = new User();


  constructor(private router: Router,
              private regService: RegistrationService,
              private formBuilder: FormBuilder
             )
  {
      this.regForm = formBuilder.group({
        "confirmPassword": ["", Validators.required],
        "login"          : ["", Validators.required],
        "agreement"      : ["", Validators.required],
        "email"          : ["", [Validators.required,
                                 Validators.pattern("^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*")]],
        "password"       : ["", [Validators.required,
                                 Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]],
        }, {
        validator: PasswordValidation.MatchPassword
      });
  }

  register() {
    this.loading = true;
    this.regService.userRegistration(this.user)
      .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
            this.loading = false;
          }
      );
  }

  //TODO Complete form starting validation
  @HostListener("click", ["$event"])
  fulfillStarted(event: Event) {
    this.notFill = false;
  }

  canDeactivate(): boolean | Observable<boolean>{
    return this.notFill;
  }
}
