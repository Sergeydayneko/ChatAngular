import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/userModel';

@Injectable()
export class LoginService {
  regUrl = "http://localhost:8080/api/userRegistration";

  constructor(private http: HttpClient) {}

  userRegistration(user: User): void {

    this.http.post(this.regUrl, user)
      .map(success => success)
      .catch(this.handleError)

  }

  // private extractData(response: Response) {
  //   return response.json()
  // }

  //TODO сделать через shared общий сервис для обработки ошибок
  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
