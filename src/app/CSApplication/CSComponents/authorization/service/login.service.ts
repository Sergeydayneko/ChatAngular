import {Injectable} from "@angular/core";
import {User} from "../model/userModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_GRANT_TYPE} from '../helpers/auth.constant';

@Injectable()
export class LoginService {
// TODO Change Http.... to something like take current URL
  static AUTH_TOKEN = "http://localhost:8081/oauth/token";
  public token: string;

  constructor(private http: HttpClient) {
    JSON.parse(localStorage.getItem('currentUser'),
      (key, value) => {
        if (key === 'token' && key !== '') {
          this.token = value;
        }
      })
  }

  userLogin(user: User) {
    const body = `username=${encodeURIComponent(user.login)}&password=${encodeURIComponent(user.password)}&grant_type=${TOKEN_GRANT_TYPE}`;

    const oauthOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD)
      })
    };

    return this.http.post(LoginService.AUTH_TOKEN, body, oauthOptions)
      .map((response: any) => {
        if (response.access_token) {
          this.token = response.access_token;
          localStorage.setItem('currentUser', JSON.stringify({username: user.login, token: this.token}));
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
