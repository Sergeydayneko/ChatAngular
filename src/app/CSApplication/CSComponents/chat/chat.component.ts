import {Component} from "@angular/core";
import * as Stomp from "stompjs";
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';

const PROTOCOL = "http";
const PORT     = "8081";

@Component({
  templateUrl: "chat.component.html",
  styleUrls: ["chat.component.scss"]
})
export class ChatComponent {
  private chatUrl = '/socket';
  private stompClient;

  constructor(){
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(){
    let webSocket = new SockJS(`${PROTOCOL}://${location.hostname}:${PORT}${this.chatUrl}`);
    this.stompClient = Stomp.over(webSocket);
    let that = this;
    this.stompClient.connect({}, () => {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message){
    this.stompClient.send("/app/send/message" , {}, message);

  }

  //
  // sendMessage(message) {
  //   const nd = new Date;
  //   const data = {
  //     message,
  //     userId: this.user,
  //     time: nd.getHours() + ":" + nd.getMinutes()
  //   };
  //
  //   this.messages = [...this.messages, data];
  // }

  messages = [];
  totalOnline = 0;
  user = 1;

  ngOnInit() {
    this.messages = [
      {
        message : 'Hi',
        userId : 2,
        time : "12:13"
      },
      {
        message : 'Hi Dev',
        userId : 1,
        time : "12:13"
      },
      {
        message : 'Whats up',
        userId : 2,
        time : "12:13"
      },
      {
        message : 'Fine',
        userId : 1,
        time : "12:13"
      },
      {
        message : 'All good? Whats new',
        userId : 1,
        time : "12:13"
      },
      {
        message : 'Learning MEAN',
        userId : 2,
        time : "12:13"
      },
      {
        message : 'Wow',
        userId : 1,
        time : "12:13"
      },
      {
        message : 'This chat app is awesome',
        userId : 2,
        time : "12:13"
      }
    ]
  }

  // sendMessage(message) {
  //   const nd = new Date;
  //   const data = {
  //     message,
  //     userId: this.user,
  //     time: nd.getHours() + ":" + nd.getMinutes()
  //   };
  //
  //   this.messages = [...this.messages, data];
  // }

}
