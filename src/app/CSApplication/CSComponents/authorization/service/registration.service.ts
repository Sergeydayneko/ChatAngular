import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {User} from '../model/userModel';

@Injectable()
export class RegistrationService {
  regUrl = "http://localhost:8080/api/user/registration";

  constructor(private http: HttpClient){}

  userRegistration(user: User) {
    return this.http.post(this.regUrl, user);
  }
}
