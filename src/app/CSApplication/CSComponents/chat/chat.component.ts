import {Component} from "@angular/core";
import * as Stomp from "stompjs";
import * as SockJS from 'sockjs-client';
import {CookieService} from "ngx-cookie-service";
import {Message} from "./model/message";

const PROTOCOL = "http";
const PORT     = "8081";

@Component({
  templateUrl: "chat.component.html",
  styleUrls: ["chat.component.scss"]
})
export class ChatComponent {
  private chatUrl = '/socket';
  private stompClient;
  public messages: Message[];
  public username;

  // TODO сделать сервис получения сохраненных сообщений из бэкэнда

  constructor(private cookie: CookieService){
    this.initializeWebSocketConnection();
    this.username = this.cookie.get("username");
  }

  initializeWebSocketConnection(){
    let webSocket = new SockJS(`${PROTOCOL}://${location.hostname}:${PORT}${this.chatUrl}`);
    this.stompClient = Stomp.over(webSocket);
    let that = this;
    this.stompClient.connect({}, () => {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          this.messages = [...this.messages, JSON.parse(message.body)]
        }
      });
    });
  }

  sendMessage(text){
    const data = {
      username : this.username,
      text     : text.trim()
    };

    this.stompClient.send("/app/send/message" , {}, JSON.stringify(data));
  }

  ngOnInit() {
    this.messages = [
      new Message("Serj", "hello everybody", "22:32:43"),
      new Message("Roma", "hello everybody", "22:32:33"),
      new Message("Igor", "hello everybody", "22:32:53")
    ]
  }
}
