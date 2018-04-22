import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {User} from '../model/userModel';

//TODO Вынести протокол и порты в константы приложения в корень проекта
const PROTOCOL = "http";
const PORT     = "8081";

@Injectable()
export class RegistrationService {
  regUrl = "/api/user/registration";

  constructor(private http: HttpClient){}

  userRegistration(user: User) {
    return this.http.post(`${PROTOCOL}://${location.hostname}:${PORT}${this.regUrl}`, user);
  }
}
