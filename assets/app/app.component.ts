import { Component } from '@angular/core';
import {Message} from "./messages/message";

@Component({
  selector: 'my-app',
  template: `
      <div class="row">

      </div>
      <div class="row">
        <section class="col-md-8 col-md-offset-2">
          <my-message *ngFor="let message of messages"  [message]="message" (editClicked)="message.content = $event"></my-message>
      </section>
    </div>
  `,
})
export class AppComponent { 
  messages: Message[] = [
    new Message('A new Message', null, 'Dan Andersen', null ),
    new Message('Another Message', null, 'Lena Kofod Andersen', null ),
    new Message('A third Message', null, 'Filippa Olivia Kodod Andersen', null )
  ]; 
}
