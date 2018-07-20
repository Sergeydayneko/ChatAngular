import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
// import {SocketService} from "./service/socket.service";
// import {ChatComponentt} from "./chat.componentt";
import {ChatComponent} from "./chat.component";
import {ChatService} from "./service/chat.service";

export const chatRoute = [
  {
    path: "chat",
    component: ChatComponent
  }
];

@NgModule({
  imports:  [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(chatRoute)
  ],
  declarations: [ChatComponent],
  providers: [ChatService]
})
export class ChatModule{}
