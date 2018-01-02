import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {User} from '../model/userModel';

@Injectable()
export class LoginService {
  regUrl = "http://localhost:8080/api/user/registration";

  constructor(private http: HttpClient){}

  userRegistration(user: User) {
    this.http.post(this.regUrl, user)
      .subscribe(data => {
        console.log(data);
      })
  }

  //TODO сделать через shared общий сервис для обработки ошибок
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
