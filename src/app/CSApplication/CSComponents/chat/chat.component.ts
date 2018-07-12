import {Component, OnInit} from "@angular/core";
import { Stomp }  from 'stompjs/lib/stomp.js';
import * as SockJS from "sockjs-client";
import {CookieService} from "ngx-cookie-service";
import {Message} from "./model/message";
// import {ChatService} from "./service/messages.service";
import * as socketIo from 'socket.io-client';
import {ChatService} from "./service/chat.service";

const PROTOCOL = "http";
const PORT     = "8081";

@Component({
  templateUrl: "chat.component.html",
  styleUrls: ["chat.component.scss"]
})
export class ChatComponent implements OnInit {
  private chatUrl = "/socket";
  private stompClient;
  public messages: Message[];
  public username;

  // TODO сделать сервис получения сохраненных сообщений из бэкэнда

  constructor(private cookie: CookieService,
              private chatService: ChatService
              ) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const webSocket = new SockJS(`${PROTOCOL}://${location.hostname}:${PORT}${this.chatUrl}`);
    this.stompClient = Stomp.over(webSocket);
    const that = this;
    this.stompClient.connect({}, () => {
      that.stompClient.subscribe("/chat", (message) => {
        if (message.body) {
          this.messages = [...this.messages, JSON.parse(message.body)];
        }
      });
    });
  }

  sendMessage(text) {
    const data = {
      username : this.username,
      text     : text.trim()
    };
    this.stompClient.send("/app/send/message" , {}, JSON.stringify(data));
  }

  ngOnInit() {
    this.username = this.cookie.get("username");

    this.messages = [
      new Message("Serj", "hello everybody", "22:32:43"),
      new Message("Roma", "hello everybody", "22:32:33"),
      new Message("Igor", "hello everybody", "22:32:53")
    ];

    const that = this;
    this.chatService
      .getAllMessages()
      .subscribe((data) => {
        that.messages = [...that.messages, ...data];
    });
  }
}
