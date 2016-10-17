import { Component, OnInit} from '@angular/core';
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
    selector: 'my-message-list',
    template: `
       <section class="col-md-8 col-md-offset-2">
          <my-message *ngFor="let message of messages"  [message]="message" (editClicked)="message.content = $event"></my-message>
      </section>
    `
})
export class MessageListComponent implements OnInit{
    constructor(private _messageService : MessageService){};
    messages: Message[];
    
    ngOnInit(){
        this.messages = this._messageService.getMessages();
    }

}