import { Injectable } from '@angular/core';
import {Response, Headers, URLSearchParams, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs';

import { Message } from './message'
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MessageService {
  allMessages = 'http://localhost:8080/api/getAllMessages'

  constructor(private http: HttpClient) {
  }

  getAllMessages(): Observable<Message[]> {
    return this.http
      .get(this.allMessages)
      .map(this.extractData)

  }

  extractData(response: Response) {
    //TODO исправить на новые типовые responces
  }


}
