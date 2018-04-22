import {Injectable} from "@angular/core";
import {User} from "../model/userModel";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_GRANT_TYPE} from '../helpers/auth.constant';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {
// TODO Change Http.... to something like take current URL
  static AUTH_TOKEN = "http://localhost:8081/oauth/token";
  public token: string;

  constructor(private http: HttpClient,
              private cookie: CookieService,
              private router: Router
              ) {
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

    //TODO попробовать через subscribe
    return this.http.post(LoginService.AUTH_TOKEN, body, oauthOptions)
      .map((response: any) => {
        if (response.access_token) {
          this.saveToken(response);
        } else {
          this.handleError();
        }
      });
  }

  private saveToken(token) {
    let expireDate = new Date().getTime() + (1000 * token.expires_in);
    this.cookie.set("access_token", token.access_token, expireDate);
    return true;
  }

  private handleError(){
    //  handle error and return the flag
    return false;
  }

  checkCredentials(){
    if (!this.cookie.check('access_token')){
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.cookie.delete('access_token');
    this.router.navigate(['/home']);
  }
}
