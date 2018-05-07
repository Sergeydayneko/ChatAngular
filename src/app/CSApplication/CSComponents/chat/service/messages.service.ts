import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChatService {
  //TODO Добавить поддержку HTTPS
  //TODO Прикрутить этот сервис
  allMessagesUrl = 'http://localhost:8081/getAllMessages';
  saveMessageUrl = 'http://localhost:8081/api/saveMessage';
  deleteMessageUrl = 'http://localhost:8081/api/deleteMessage';

  constructor(private http: HttpClient) {
  }

  getAllMessages(): Observable<Message[]> {
    return this.http.get(this.allMessagesUrl)
      .map(data => {
        if (data instanceof Array)
          return data.map(message => {
            return new Message(message.username, message.text, message.date);
          })
      })
  }

  deleteMessage(message: Message): void {
    this.http.post(this.deleteMessageUrl, message)
      .map(success => success)
      .catch(this.handleError )
  }

  private extractData(response: any) {
    return response.json()
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
