import { Component } from '@angular/core';
import {MessageService} from './message.service';
import {Message} from './message';

@Component({
    selector: 'my-message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)=onSubmit(f.value) #f="ngForm"> 
                <div class="form-group">
                    <label for="content">Content</label>
                    <input ngControl="content" type="text"  id="content" #input>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </section>
    `

})

export class MessageInputComponent{
    constructor(private _messageService : MessageService){};

    onSubmit(form:any){
        const message: Message = new Message(form.content, null, 'Dummy');
        this._messageService.addMessage(message);
        
    }
}
