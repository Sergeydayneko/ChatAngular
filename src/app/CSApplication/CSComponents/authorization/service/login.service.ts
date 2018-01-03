import {Injectable} from '@angular/core';
import {User} from '../model/userModel';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {
  //TODO Change Http.... to something like take current URL
  loginUrl = "http://localhost:8080/api/user/login";

  constructor(private http: HttpClient) {}

  userLogin(user: User) {
    return this.http.post(this.loginUrl, user)
  }
}
