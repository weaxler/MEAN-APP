import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { MessageComponent} from "./messages/message.component";
import { MessageListComponent} from "./messages/message-list.component";
import { MessageInputComponent} from "./messages/message-input.component";
import {MessageService} from "./messages/message.service";
import {MessagesComponent} from "./messages/messages.component";
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MessageComponent, MessageListComponent, MessageInputComponent, MessagesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MessageService]
})
export class AppModule { }
