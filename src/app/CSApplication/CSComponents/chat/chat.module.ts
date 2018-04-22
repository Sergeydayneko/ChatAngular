import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ChatComponent} from "./chat.component";
import {RouterModule} from "@angular/router";
import {ChatService} from "./service/messages.service";

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
