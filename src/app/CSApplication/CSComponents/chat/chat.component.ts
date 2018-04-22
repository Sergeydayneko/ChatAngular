import {Component} from "@angular/core";
import * as Stomp from "stompjs";
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';

const PROTOCOL = "http";
const PORT     = "8081";

@Component({
  templateUrl: "chat.component.html"
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
    $('#input').val('');
  }

}
