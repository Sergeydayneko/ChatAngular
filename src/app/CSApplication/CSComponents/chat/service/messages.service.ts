import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatService {
  //TODO Добавить поддержку HTTPS
  //TODO Прикрутить этот сервис
  allMessagesUrl = 'http://localhost:8081/api/getAllMessages';
  saveMessageUrl = 'http://localhost:8081/api/saveMessage';
  deleteMessageUrl = 'http://localhost:8081/api/deleteMessage';

  constructor(private http: HttpClient) {
  }

  getAllMessages(): Observable<Message[]> {
    return this.http
      .get(this.allMessagesUrl)
      .map(this.extractData)
      .catch(this.handleError)
  }

  //TODO доделать обработку успешного результата
  saveMessage(message: Message): void {
    this.http.post(this.saveMessageUrl, message)
      .map(success => success)
      .catch(this.handleError)
  }

  deleteMessage(message: Message): void {
    this.http.post(this.deleteMessageUrl, message)
      .map(success => success)
      .catch(this.handleError )
  }

  private extractData(response: Response) {
    return response.json()
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
